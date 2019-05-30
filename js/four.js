// 4.) List all the friends above in reverse alphabetical order.
// There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.

var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var arrFriends = friends.split(',');

console.log(arrFriends.sort().reverse().join(', '));
