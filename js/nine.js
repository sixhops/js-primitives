//9.) Change the word "Space" to the word "Spice".

var word = "Space";
var myWord = word.split('');
myWord.splice(2, 1, 'i');

console.log(myWord.join(''));
