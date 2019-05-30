var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var friendsArray = friends.split(','); 
friendsArray.sort();
friendsArray.reverse();
var newString = friendsArray.join(',')
console.log(newString); 






