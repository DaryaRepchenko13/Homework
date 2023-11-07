// Задание 1: 

 const numbs = [1, 5, 4, 10, 0, 3];
 for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}


// Задание 2:

numbers = [1, 5, 4, 10, 0, 3];

alert(numbers.indexOf(4));

// Задание 3: 

numbers = [1, 3, 5, 10, 20];

alert(numbers.join(''));


// Задание 4: 

let multNumbers = [];

 for (let x = 0; x < 3; x++) {
  multNumbers[x] = [];
  for (let y = 0; y <3; y++) {
   multNumbers[x] [y] = 1;
  }
 }
console.log(multNumbers);


// Задание 5: 

numbers5 = [1, 1, 1];

for (let b = 0; b < 3; b++) {
    numbers5.push(2);

}
console.log(numbers5);



// Задание 6: 

let arr = [9, 8, 7, 'a', 6, 5];

arr.sort().pop();
console.log(arr);


// Задание 7: 

const arr7 = ['9', '8', '7', '6', '5'];

if (arr7.includes(prompt(`Угадай число`))) {

    alert(`Угадал`)

} else {

    alert(`Не угадал`)

}


// Задание 8:

const oneString = 'abcdef';
const twoString = oneString.split('').reverse().join('');

console.log(twoString);

// Задание 9:

let products = [[1, 2, 3], [4, 5, 6]];

let areaResult = products.reduce((firstArea, secondArea) => firstArea.concat(secondArea), []);

console.log(areaResult);

// Задание 10:

const someNumbs = [1, 2, 3, 4, 5]

for (let x = 1; x < someNumbs.length; x++) {

	console.log(someNumbs[x] + someNumbs[x-1]);

}

// Задание 11:

const array = [9, 8, 7, 6, 5];
const doubles = array.map((num) => num ** 2);

console.log(doubles); 


// Задание 12:

const getLengthWords = source => source.map(str => str.length);
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));


// Задание 13:

const filterPositive = (array) => {
    let arrayInt = [];
    for(let num of array){
        if(num < 0)
          arrayInt.push(num);
    }
    return arrayInt;

}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));