//sort string alphabetically
var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
/*var newArr = friends.split(',');
var newArrSorted = newArr.sort();
var friendsSorted = newArrSorted.join(',');
console.log(friendsSorted);*/
console.log(friends.split(',').sort().join(','));