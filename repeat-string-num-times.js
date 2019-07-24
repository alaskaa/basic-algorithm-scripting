/* Repeat a given string for num times, return empty string if num not positive.
 *
 * Don't use the inbuilt repeat function.
 *
 */

function repeatStringNumTimes(str, num) {
    return [...(new Array(num > 0 ? num : 0))].map(i => str).join("");
}

repeatStringNumTimes("abc", 3); // should return "abcabcabc"
repeatStringNumTimes("abc", -2); // should return ""
