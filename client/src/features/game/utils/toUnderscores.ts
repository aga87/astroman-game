export const toUnderscores = (arr: Character[]): ('_' | ' ')[] =>
  arr.map(char => {
    if (char === ' ') return ' ';
    return '_';
  });
