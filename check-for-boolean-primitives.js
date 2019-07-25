/* Check if a value is classified as a boolean primitive (so true or false) */

function isBooleanPrimitive(val) {
    return (typeof bool === "boolean" ? true : false);
}

isBooleanPrimitive(true); // should return true;
isBooleanPrimitive("a"); // should return false;
