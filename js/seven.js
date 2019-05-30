var foods = [
    'Popcorn',
    'Potato chips',
    'Shrimp',
    'Chicken rice',
    'Poutine',
    'Tacos',
    'Toast',
    'French Toast',
    'Crab',
    'Pho',
    'Lasagna',
    'Brownie',
    'Lobster',
    'Donuts',
    'Ice cream',
    'Hamburger',
    'Sushi',
    'Chocolate',
    'Pizza'
  ];

  //Using indexOf to find the index of Donut and using splice to remove it from array.   
  var d = foods.indexOf("Donuts");
  foods.splice(d,1)
  console.log(foods.length);
  console.log(foods);

