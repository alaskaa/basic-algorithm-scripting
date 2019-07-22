/* Return the length of the longest word in the provided sentence 
 * 
 * Assume the words are only separated by spaced (no punctuation).
 *
 * */

function findLongestWordLength(str) {
    return str.split(" ").reduce((acc, curr) => {
        if(acc > curr.length) {
	    return acc;
	} else {
            return curr.length;
	}
    }, 0);
// set initial acc value to 0
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// returns 6
