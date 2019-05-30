var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

var myMedian = median(ages);
function median(ages){
    ages.sort(function(a, b){ return a - b; });
    var i = ages.length / 2;
    return i % 1 == 0 ? (ages[i - 1] + ages[i]) / 2 : ages[Math.floor(i)];
      }
console.log(myMedian);