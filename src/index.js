/*
* Power Set
* Power set of a set A is the set of all of the subsets of A.
* Eg. for {x, y, z}, the subsets are : {{}, {x}, {y}, {z}, {x, y}, {x, z}, {y, z}, {x, y, z}}
*/

function powerSet(originalSet) {
  return originalSet;
}

/*
* Longest common subsequence problem
* The longest common subsequence (LCS) problem is the problem of finding the longest subsequence
* common to all sequences in a set of sequences (often just two sequences).
* Example
* LCS for input Sequences ABCDGH and AEDFHR is ADH of length 3.
* LCS for input Sequences AGGTAB and GXTXAYB is GTAB of length 4.
*/

function longestCommonSubsequnce(set1, set2) {
  return set1 + set2;
}

module.exports = {
  powerSet,
  longestCommonSubsequnce,
};
