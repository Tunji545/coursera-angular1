const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterList(value) {
  return value > 5;
}

const filteredNumberArray = numberArray.filter(filterList);

const foodList = [
  'Donuts',
  'cheese',
  'cookies',
  'pie',
  'burgar',
  'peanut',
  'milk',
  'peptol bismol',
  'pepto bismol (chocolate flavour)',
  'peptol bismol (cookie flavor)',
];

const searchFood = 'bismol';
function filterFoodList(food) {
  return food.indexOf(searchFood) !== -1;
}

const filteredFoodList = foodList.filter(filterFoodList);

console.log(filteredFoodList);
