/* Remove all falsy values from a given array */

function removeFalsyValues(arr) {
    return arr.filter(item => Boolean(item) === true);
}

removeFalsyValues([7, "ate", "", false, 9]; // should return [7, "ate", 9]
