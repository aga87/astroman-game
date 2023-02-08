export const updateRoundProgress = ({
  roundProgress,
  key,
  guess
}: {
  roundProgress: ('_' | Character)[];
  key: Character[];
  guess: Letter;
}): ('_' | Character)[] =>
  key.map((letter, index) => {
    if (letter === guess) return guess;
    return roundProgress[index];
  });
