export const toCharacterArr = (str: string): Character[] =>
  str
    .toUpperCase()
    .split('')
    .map(char => char as Character);
