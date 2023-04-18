import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  alphabet,
  getUniqueLetterCount,
  toCharacterArr,
  toUnderscores,
  updateRoundProgress
} from '../utils';

const initialState = {
  isPL1: false,
  isNextTurnPL1: true,
  bookKey: [] as Character[],
  roundProgress: [] as ('_' | Character)[],
  uniqueLetterCount: 0,
  availLetters: [] as Letter[],
  isPassAllowed: false,
  pointsPL1: 0,
  pointsPL2: 0,
  chancesPL1: 8,
  chancesPL2: 8,
  level: 1,
  isGameOver: false
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayer1(state) {
      return {
        ...state,
        isPL1: true
      };
    },
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
    resetGame(state) {
      return {
        ...initialState,
        isPL1: state.isPL1
      };
    }
  }
});

export default gameSlice.reducer;

export const { setPlayer1, startLevel, makeMove, passTurn, resetGame } =
  gameSlice.actions;
