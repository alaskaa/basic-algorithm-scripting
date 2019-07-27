/* Truncate a string (first arg) if it is longer than given maximum string length (second arg).
 * Return truncated string with a ... ending.
 */

function truncateString(str, num) {
    return str.length <= num ? str : (str.slice(0, num) + "...");
}

truncateString("A-tisket a-tasket A green and yellow basket", 8); // should return "A-tisket"
