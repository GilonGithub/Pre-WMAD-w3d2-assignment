// write a function that takes the last item of the second array, and adds it to the end of the first array.
let food = ['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs'];

let numbers = ['1', '2', '3', '4'];

const addTheLast = function (firstArr, secondArr) {
    
    firstArr[firstArr.length] = secondArr[secondArr.length-1];

};

addTheLast(food, numbers);
console.log(food);
