/*change a word in string
var word = "Space";
var newArr = word.split();
newArr.splice(0,1,"Spice");
console.log(newArr);
word = newArr.join();
console.log(word); */
var word = "Space";
var newArr = word.split("");
newArr[2]='i';
//console.log(newArr);
word = newArr.join('');
console.log(word);

