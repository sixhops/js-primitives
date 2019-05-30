var ages = [85, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
var agesSorted = ages.sort(function(a,b){return a-b});
var half = Math.floor(agesSorted.length / 2);
var medianAge;
console.log("Array length : " + ages.length);
console.log(half);
console.log(agesSorted);
if(ages.length % 2 === 0){
    medianAge = (agesSorted[half -1] + agesSorted[half])/2
    console.log("This is the median: " + medianAge);
}
else{
    medianAge = agesSorted[half];
    console.log("This is the median: " + medianAge);
}