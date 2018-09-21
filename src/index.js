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
/* eslint-disable */
function levenshteinDistance(a, b) {
  if(a.length == 0) return b.length; 
  if(b.length == 0) return a.length; 

  var matrix = [];

  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
}

/*
* Cartesian Product
* In set theory a Cartesian product is a mathematical operation that returns a set (or product
* set or simply product) from multiple sets. That is, for sets A and B, the Cartesian product A × B
* is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B.
*
*/

function cartesianProduct(setA, setB) {
let arr3 = [];
if(!setA || !setB){
	return null;
}
   setA.forEach(el1=>{
	setB.forEach(el2=>{
		arr3.push([el1,el2]);
	})
    })
return arr3;
   }

module.exports = {
  levenshteinDistance,
  cartesianProduct,
};
