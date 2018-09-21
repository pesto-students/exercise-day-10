/*
* Levenshtein Distance
* The Levenshtein distance is a string metric for measuring the difference between two sequences.
* Informally, the Levenshtein distance between two words is the minimum number of single-character
* edits (insertions, deletions or substitutions) required to change one word into the other.
*
* For example, the Levenshtein distance between kitten and sitting is 3, since the following
* three edits change one into the other, and there is no way to do it with fewer than three edits:
*
* 1. kitten → sitten (substitution of "s" for "k")
* 2. sitten → sittin (substitution of "i" for "e")
* 3. sittin → sitting (insertion of "g" at the end).
*/

function levenshteinDistance(a, b) {
  return a + b;
}

/*
* Cartesian Product
* In set theory a Cartesian product is a mathematical operation that returns a set (or product
* set or simply product) from multiple sets. That is, for sets A and B, the Cartesian product A × B
* is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B.
*
*/

function cartesianProduct(setA, setB) {
  if (!Array.isArray(setA) || !Array.isArray(setB)) return null;

  let ret = [];
  setA.forEach((elemA) => {
    ret = ret.concat(setB.map(elemB => [elemA, elemB]));
  });
  return ret;
}

module.exports = {
  levenshteinDistance,
  cartesianProduct,
};
