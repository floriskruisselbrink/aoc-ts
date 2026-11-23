export type Puzzle = {
  part1: (rawInput: string) => Promise<string>;
  part2: (rawInput: string) => Promise<string>;
};
