const {
  powerSet,
  longestCommonSubsequnce,
} = require('../src/index');

describe('powerSet', () => {
  it('should calculate power set of given set', () => {
    const powerSets1 = powerSet([1]);
    const powerSets2 = powerSet([1, 2, 3]);

    expect(powerSets1).toEqual([
      [],
      [1],
    ]);

    expect(powerSets2).toEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ]);
  });
});

describe('longestCommonSubsequnce', () => {
  it('should find longest common subsequence for two strings', () => {
    expect(longestCommonSubsequnce([''], [''])).toEqual(['']);

    expect(longestCommonSubsequnce([''], ['A', 'B', 'C'])).toEqual(['']);

    expect(longestCommonSubsequnce(['A', 'B', 'C'], [''])).toEqual(['']);

    expect(longestCommonSubsequnce(
      ['A', 'B', 'C'],
      ['D', 'E', 'F', 'G'],
    )).toEqual(['']);

    expect(longestCommonSubsequnce(
      ['A', 'B', 'C', 'D', 'G', 'H'],
      ['A', 'E', 'D', 'F', 'H', 'R'],
    )).toEqual(['A', 'D', 'H']);

    expect(longestCommonSubsequnce(
      ['A', 'G', 'G', 'T', 'A', 'B'],
      ['G', 'X', 'T', 'X', 'A', 'Y', 'B'],
    )).toEqual(['G', 'T', 'A', 'B']);

    expect(longestCommonSubsequnce(
      ['A', 'B', 'C', 'D', 'A', 'F'],
      ['A', 'C', 'B', 'C', 'F'],
    )).toEqual(['A', 'B', 'C', 'F']);
  });
});
