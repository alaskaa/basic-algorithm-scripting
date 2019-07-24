/* Check if a string (first argument "str") ends with the given target
 * string (second argument "target"). Return true if true, false if false.
 *
 * Don't use endsWith() method
 */

function confirmEnding(str, target) {
    return str.substring(str.length - target.length) === target ? true : false;
}

confirmEnding("Congratulations", "on"); // should return true
confirmEnding("Connor", "n"); // should return false

