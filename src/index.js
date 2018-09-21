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
function hammingDistance(a, b) {
  let hd = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      hd += 1;
    }
  }
  if (a.length !== b.length) {
    hd += Math.abs(a.length - b.length);
  }
  return hd;
}

function matchString(pattern, original) {
  const plen = pattern.length;
  const olen = original.length;
  for (let i = 0; i <= olen - plen; i += 1) {
    let j;
    for (j = 0; j < plen; j += 1) {
      if (original[i + j] !== pattern[j]) {
        break;
      }
    }
    if (j === plen) {
      return true;
    }
  }
  return false;
}

function levenshteinDistance(a, b) {
  // before hamming select the smaller string first
  // calculate the hamming distance
  // add the length difference
  /*
  let smallString = b;
  if (a.length < b.length) {
    smallString = a;
  }
  let hd = 0;
  for (let i = 0; i < smallString.length; i += 1) {
    if (a[i] !== b[i]) {
      hd += 1;
    }
  }
  if (a.length !== b.length) {
    hd += Math.abs(a.length - b.length);
  }
  return hd;
  */
  // Calculate how many characters which are not same
  // two case once of same length * other is not
  // if (a.length !== b.length) {
  // let counter = 0;
  // for (let i = 0; i < a.length; i += 1) {
  /*
      if (b.indexOf(a[i]) !== -1) {
        counter += 1;
      }
  */
  /*
    for (let j = 0; j < a.length; j += 1) {
        if (a[i] !== b[j]) {
          counter += 1;
        }
        break;
      }
    }
    counter += Math.abs(a.length - b.length);
    return counter;
  }
  return 0;
  */
  // check whether smaller string matches the longer one - KMP (don't know)
  if (a.length < b.length) {
    if (matchString(a, b)) {
      return Math.abs(a.length - b.length);
    }
    return b.length;
  } else if (b.length < a.length) {
    if (matchString(b, a)) {
      return Math.abs(a.length - b.length);
    }
    return a.length;
  }
  if (!matchString(a, b)) {
    return hammingDistance(a, b);
  }
  return 0;
}

/*
 * Cartesian Product
 * In set theory a Cartesian product is a mathematical operation that returns a set (or product
 * set or simply product) from multiple sets. That is, for sets A and B, the Cartesian product A × B
 * is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B.
 *
 */

function cartesianProduct(setA, setB) {
  return setA + setB;
}

module.exports = {
  levenshteinDistance,
  cartesianProduct,
};
