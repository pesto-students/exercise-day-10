const {
  levenshteinDistance,
  cartesianProduct,
} = require('../src/index');

describe('levenshteinDistance', () => {
  it('should calculate edit distance between two strings', () => {
    expect(levenshteinDistance('', '')).toBe(0);
    expect(levenshteinDistance('a', '')).toBe(1);
    expect(levenshteinDistance('', 'a')).toBe(1);
    expect(levenshteinDistance('abc', '')).toBe(3);
    expect(levenshteinDistance('', 'abc')).toBe(3);

    // Should just add I to the beginning.
    expect(levenshteinDistance('islander', 'slander')).toBe(1);

    // Needs to substitute M by K, T by M and add an A to the end
    expect(levenshteinDistance('mart', 'karma')).toBe(3);

    // Substitute K by S, E by I and insert G at the end.
    expect(levenshteinDistance('kitten', 'sitting')).toBe(3);

    // Should add 4 letters FOOT at the beginning.
    expect(levenshteinDistance('ball', 'football')).toBe(4);

    // Should delete 4 letters FOOT at the beginning.
    expect(levenshteinDistance('football', 'foot')).toBe(4);

    // Needs to substitute the first 5 chars: INTEN by EXECU
    expect(levenshteinDistance('intention', 'execution')).toBe(5);
  });
});

describe('cartesianProduct', () => {
  it('should return null if there is not enough info for calculation', () => {
    const product1 = cartesianProduct([1], null);
    const product2 = cartesianProduct([], null);

    expect(product1).toBeNull();
    expect(product2).toBeNull();
  });

  it('should calculate the product of two sets', () => {
    const product1 = cartesianProduct([1], [1]);
    const product2 = cartesianProduct([1, 2], [3, 5]);

    expect(product1).toEqual([[1, 1]]);
    expect(product2).toEqual([[1, 3], [1, 5], [2, 3], [2, 5]]);
  });
});
