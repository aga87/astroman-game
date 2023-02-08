export const getUniqueLetterCount = (arr: Character[]): number =>
  arr
    .filter((letter, index, self) => self.indexOf(letter) === index)
    .filter(letter => letter !== ' ').length;
