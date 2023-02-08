import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  alphabet,
  getUniqueLetterCount,
  toCharacterArr,
  toUnderscores
} from '../../utils';

const initialState = {
  bookKey: [] as Character[],
  roundProgress: [] as ('_' | ' ')[],
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
    }
  }
});

export default gameSlice.reducer;

export const { startLevel } = gameSlice.actions;

// Selectors
export const selectAvailLetters = (state: State): Letter[] =>
  state.availLetters.map(letter => letter.toLowerCase() as Letter);
export const selectChancesPL1 = (state: State): number => state.chancesPL1;
export const selectChancesPL2 = (state: State): number => state.chancesPL2;
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
