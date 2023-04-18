import { RootState } from '../../../redux/store';

export const selectAvailLetters = (state: RootState): Letter[] =>
  state.gameReducer.availLetters.map(letter => letter.toLowerCase() as Letter);

export const selectChancesPL1 = (state: RootState): number =>
  state.gameReducer.chancesPL1;

export const selectChancesPL2 = (state: RootState): number =>
  state.gameReducer.chancesPL2;

export const selectIsGameOver = (state: RootState): boolean =>
  state.gameReducer.isGameOver;

export const selectIsNextTurnPL1 = (state: RootState): boolean =>
  state.gameReducer.isNextTurnPL1;

export const selectIsPassAllowed = (state: RootState): boolean =>
  state.gameReducer.isPassAllowed;

export const selectIsPL1 = (state: RootState): boolean =>
  state.gameReducer.isPL1;

export const selectPlayer = (state: RootState): Player =>
  state.gameReducer.isPL1 ? 'Player 1' : 'Player 2';

export const selectIsRoundOver = (state: RootState): boolean =>
  state.gameReducer.uniqueLetterCount === 0;

export const selectLevel = (state: RootState): number =>
  state.gameReducer.level;

export const selectPointsPL1 = (state: RootState): number =>
  state.gameReducer.pointsPL1;

export const selectPointsPL2 = (state: RootState): number =>
  state.gameReducer.pointsPL2;

export const selectRoundProgress = (state: RootState): string =>
  state.gameReducer.roundProgress.join('');

export const selectWinner = (state: RootState): string => {
  if (!state.gameReducer.isGameOver) return '';
  if (state.gameReducer.pointsPL1 > state.gameReducer.pointsPL2)
    return 'Player 1 wins';
  if (state.gameReducer.pointsPL1 < state.gameReducer.pointsPL2)
    return 'Player 2 wins';
  if (state.gameReducer.chancesPL1 > state.gameReducer.chancesPL2)
    return 'Player 1 wins';
  return 'Player 2 wins';
};
