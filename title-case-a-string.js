/* Titlecase a string - so capitalise each first letter in the word, the rest
 * should be lowercase */

function titleCase(str) {
    return str.toLowerCase().split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(" ");
}

titleCase("sHorT AnD sToUt"); // should return "Short And Stout"
