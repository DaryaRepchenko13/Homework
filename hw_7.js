// // Задание 1: 

// let upperValue = "js";
// console.log(upperValue.toUpperCase());


// // Задание 2:

// function searchStart(arr, start) {

//     const string = start.toLowerCase();
//     return arr.filter((str) => str.toLowerCase().includes(string));

// } 

// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
// console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
// console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []


// // Задание 3:

// console.log(Math.floor(32.58884));
// console.log(Math.ceil(32.58884));
// console.log(Math.round(32.58884));


// // Задание 4: 

// const number = [52, 53, 49, 77, 21, 32];

// const min = (value) => value.reduce((x,y) => Math.min(x,y));
// const max = (value) => value.reduce((x,y) => Math.max(x,y));

// console.log(min(number), max(number));


// // Задание 5: 

// function showRandomNumber() {

//     return Math.floor(Math.random() * 10 + 1);

// }
// console.log(showRandomNumber());


// // Задание 6: 

// let getRandomNumbers = (num) => {

//     let arr = [];
//      for (let i = 0; i < Math.floor(num/2); i++) {
//         arr.push(Math.floor(Math.random() * (num + 1)));
//      }
//     return arr; 
// }

// console.log(getRandomNumbers(6));
// console.log(getRandomNumbers(10));
// console.log(getRandomNumbers(14));


// // Задание 7: 

// const randomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// console.log(randomNumbers(3, 5));


// // Задание 8:

// let currentDate = new Date();
// console.log(currentDate);

// // Задание 9:

// let currentDate = new Date();

// currentDate.setDate(currentDate.getDate() + 73);

// console.log(currentDate);


// // Задание 10:

// let myDate = new Date();

// function formDate(date) {
//     const day = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     const month = ["Январь", "Фефраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

//     let second = date.getSeconds();
//     if (second < 10) {second = '0' + second}
//     let minutes = date.getMinutes();
//     if (minutes < 10) {minutes = '0' + minutes}
//     let hours = date.getHours();
//     if (hours < 10) {hours = '0' + hours}

//     let dateFormat = "Дата:" + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear() + " - это " + day[date.getDay()] + ` Время: ` + `${hours}` + `:${minutes}` + `:${second}`
//     return dateFormat;

// }

// console.log(formDate(myDate));


// // Задание 11:

// let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
// fruits = fruits.sort(() => Math.random() - 0.5);
// alert(fruits);

// let firstFruit = prompt("Чему равнялся первый элемент массива?");
// let lastFruit = prompt("Чему равнялся последний элемент массива?");

// for (let i = 0; i < fruits.length; i++) {

//     if (firstFruit === "" || firstFruit === " " || firstFruit === null || lastFruit === "" || lastFruit === " " || lastFruit === null) {
//         alert("Ошибка элемента");
//     } else if (fruits[0].toUpperCase().includes(firstFruit.toUpperCase()) && fruits[fruits.length - 1].toLocaleUpperCase().includes(lastFruit.toUpperCase())) {
//         alert('Поздравляю с победой!Вы угадали!');
//     } else if (fruits[0].toUpperCase().includes(firstFruit.toUpperCase()) || fruits[fruits.length - 1].toLocaleUpperCase().includes(lastFruit.toUpperCase())) {
//         alert('Вы были близки к победе!');
//     } else {
//         alert("Вы не угадали((((")
//     }    
//     break
    
// }






