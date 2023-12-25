// // Задание 1: 

// const age = [11, 18, 10, 17, 21, 31, 16];
// const result = age.filter(item => item >= 12);
// console.log(result);


// // Задание 2:

// const salary = [100000, 180000, 50000, 70000, 31000,];
// let result = salary.map(item => (item - item * 0.13));
// console.log(result);


// // Задание 3:

// const arr = [1, 2, 3, 4];
// const result = arr.reduce((intermediate, value) => intermediate * value);
// console.log(result);




// // Задание 4: 

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// console.log(arr[2] [1]);


// Задание 5: 

// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
// ];
// for (let arrIn of arr) {
//    for (let element of arrIn) {
//     console.log(element);
//    }
    
// }


// // Задание 6: 

// let numbers = [1, 2, 3, 4, 5, 6];
// let search = numbers.includes(5);
// console.log(search);


// // Задание 7: 

// let arrMax = [1, 2, 3, 4, 5];
// let max = Math.max(...arrMax);
// console.log(max);

// // Задание 8:

// function funcSum(...arrSum) {
//     let sum = 0;
//     for (let item of arrSum) {
//         sum += item;
//     }
//     return sum;
// }
// console.log(funcSum(2,10,5));


// // Задание 9:

// const book = [
// 	{ name: 'foreword', pageCount: 14 },
// 	{ name: 'boyWhoLived', pageCount: 18 },
// 	{ name: 'vanishingGlass', pageCount: 13 },
// 	{ name: 'lettersFromNoOne', pageCount: 17 },
// 	{ name: 'afterword', pageCount: 19 },
// ];
// console.log(book[1] ['pageCount']);




// Задание 10:

// const newspaper = {
// 	sports: {
// 		title: 'ARod Hits Home Run',
// 		writers: ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige'],
// 	},
// 	business: {
// 		title: 'GE Stock Dips Again',
// 		writers: ['Adam Smith', 'Albert Humphrey', 'Charles Handy'],
// 	},
// 	movies: {
// 		title: 'Superman Is A Flop',
// 		writers: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris'],
// 	},
// };

// newspaper.sports.title; // ARod Hits Home Run
// newspaper.business.writers[0]; // Adam Smith
// newspaper['movies']['title']; // Superman Is A Flop

// // Задание 11:

// let welcome; 
// let myDate = new Date(); 
// let hour = myDate.getHours(); 
// let minute = myDate.getMinutes(); 
// let second = myDate.getSeconds(); 

// if (minute < 10) { 
// 	minute = "0" + minute; 
// }
// if (second < 10) { 
// 	second = "0" + second; // 
// }

// if (hour < 12) {
// 	welcome = "Доброе утро";
// } else if (hour < 17) {
// 	welcome = "Добрый день";
// } else {
// 	welcome = "Добрый вечер";
// }

// console.log(welcome + ", текущее время: " + hour + ":" + minute + ":" + second);

// //Задание 12:


// let regexp = /^[а-яА-Я]*$/; // что означает эта запись, мы разберем чуть ниже
// let name = prompt('Введите ваше имя. Используйте только кириллические символы');

// if (regexp.test(name)) {
// 	alert('Ваше имя сохранено');
// } else {
// 	alert('Введены некорректные символы');
// }


// //Задание 13:

// const currentDate = new Date();
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// currentDate.toLocaleDateString('ru-RU', options);

// console.log(currentDate.toLocaleDateString('ru-RU', options));


// //Задание 14:

// const fibonacci = [1, 1, 2, 3, 5, 8];
// const multipleByTwoFib = fibonacci.map(el => el * 2);
// const plusTenFib = fibonacci.map(el => el + 10);
// const onlyBigFib = fibonacci.filter(el => el > 3);


// console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
// console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
// console.log(onlyBigFib); // => [5, 8]

// //Задание 15:


// function callbackWithArrayLength(arr, callback) {
//     // console.log(arr);
//     /* Писать код тут */
    
//     callback(arr.length);;
//   }
  
//   callbackWithArrayLength([1], (length) => {
//     console.log(length);
//   });
  
//   callbackWithArrayLength([1, 1], (len) => {
//     console.log(len);
//   });
//   callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
//     console.log(l);
//   });

//Задание 16:

function log(arrItem) {
  console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
for (let i = 0; i < arr.length; i++) {
  cb(arr[i]);
}
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);