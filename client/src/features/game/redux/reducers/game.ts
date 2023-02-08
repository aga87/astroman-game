import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  alphabet,
  getUniqueLetterCount,
  toCharacterArr,
  toUnderscores,
  updateRoundProgress
} from '../../utils';

const initialState = {
  bookKey: [] as Character[],
  roundProgress: [] as ('_' | Character)[],
  uniqueLetterCount: 0,
  availLetters: [] as Letter[],
  isNextTurnPL1: true,
  isPassAllowed: false,
  pointsPL1: 0,
  pointsPL2: 0,
  chancesPL1: 8,
  chancesPL2: 8,
  level: 1,
  isGameOver: false
};

type State = typeof initialState;

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startLevel(state, action: PayloadAction<string>) {
      const randomBook = action.payload;
      // We will compare players' guesses against this array
      const bookArr = toCharacterArr(randomBook);
      const roundProgress = toUnderscores(bookArr);
      const uniqueLetterCount = getUniqueLetterCount(bookArr);

      return {
        ...state,
        bookKey: bookArr,
        roundProgress,
        uniqueLetterCount,
        availLetters: alphabet
      };
    },
    makeMove(state, action: PayloadAction<Letter>) {
      const guess = action.payload.toUpperCase() as Letter;
      const isGuessCorrect = state.bookKey.includes(guess);
      const availLetters = state.availLetters.filter(
        letter => letter !== guess
      );

      if (isGuessCorrect) {
        const roundProgress = updateRoundProgress({
          roundProgress: state.roundProgress,
          key: state.bookKey,
          guess
        });
        const uniqueLetterCount = state.uniqueLetterCount - 1;

        if (state.uniqueLetterCount > 1)
          return {
            ...state,
            roundProgress,
            uniqueLetterCount,
            isPassAllowed: true,
            availLetters
          };

        // If uncovering the last letter...

        const pointsPL1 = state.isNextTurnPL1
          ? state.pointsPL1 + 1
          : state.pointsPL1;

        const pointsPL2 = state.isNextTurnPL1
          ? state.pointsPL2
          : state.pointsPL2 + 1;

        return {
          ...state,
          roundProgress,
          pointsPL1,
          pointsPL2,
          uniqueLetterCount,
          isPassAllowed: false,
          availLetters: [],
          level: state.level + 1
        };
      }

      // IF GUESS IS WRONG
      if (
        // if one of the players has no chances left and it's their turn: game over
        (state.isNextTurnPL1 && state.chancesPL1 === 0) ||
        (!state.isNextTurnPL1 && state.chancesPL2 === 0)
      )
        return {
          ...state,
          isGameOver: true
        };

      const chancesPL1 = state.isNextTurnPL1
        ? state.chancesPL1 - 1
        : state.chancesPL1;
      const chancesPL2 = state.isNextTurnPL1
        ? state.chancesPL2
        : state.chancesPL2 - 1;

      return {
        ...state,
        isNextTurnPL1: !state.isNextTurnPL1,
        chancesPL1,
        chancesPL2,
        isPassAllowed: false,
        availLetters
      };
    },
    passTurn(state) {
      return {
        ...state,
        isNextTurnPL1: !state.isNextTurnPL1,
        isPassAllowed: false
      };
    },
    resetGame() {
      return initialState;
    }
  }
});

export default gameSlice.reducer;

export const { startLevel, makeMove, passTurn, resetGame } = gameSlice.actions;

// Selectors
export const selectAvailLetters = (state: State): Letter[] =>
  state.availLetters.map(letter => letter.toLowerCase() as Letter);
export const selectChancesPL1 = (state: State): number => state.chancesPL1;
export const selectChancesPL2 = (state: State): number => state.chancesPL2;
export const selectIsGameOver = (state: State): boolean => state.isGameOver;
export const selectIsNextTurnPL1 = (state: State): boolean =>
  state.isNextTurnPL1;
export const selectIsPassAllowed = (state: State): boolean =>
  state.isPassAllowed;
export const selectIsRoundOver = (state: State): boolean =>
  state.uniqueLetterCount === 0;
export const selectLevel = (state: State): number => state.level;
export const selectPointsPL1 = (state: State): number => state.pointsPL1;
export const selectPointsPL2 = (state: State): number => state.pointsPL2;
export const selectRoundProgress = (state: State): string =>
  state.roundProgress.join('');
export const selectWinner = (state: State): string => {
  if (!state.isGameOver) return '';
  if (state.pointsPL1 > state.pointsPL2) return 'Player 1 wins';
  if (state.pointsPL1 < state.pointsPL2) return 'Player 2 wins';
  if (state.chancesPL1 > state.chancesPL2) return 'Player 1 wins';
  return 'Player 2 wins';
};
