// Задание 1: 

function sum(a, b) {
  return a < b ? a : b;
}
console.log(sum(4,8));

// Задание 2: 

const enterNumber = () => {
  let userEnter = Number(prompt('Введите число!'))

  if (userEnter % 2 === 0) {
    console.log('Число чётное');
    
  } else {
    console.log('Число нечётное');
  }

}
enterNumber();


// Задание 3.1: 

function squareNum(num) {
  console.log(num * num);
}
square(2);

// Задание 3.2: 

function squareNum1(number) {
  return(number * number);
}
console.log(squareNum1(8));

// Задание 4: 

function getUserAge() {
  let age = prompt('Сколько вам лет?');

  if (isNaN(age) || age === "" || age === null || age === " ") {
    return('Не число');
  } else if (age < 0) {
    return('Вы ввели неправильное значение!');
  } else if (age <= 12) {
    return('Привет, друг!');
  } else if (age >= 13) {
    return("Добро пожаловать!");
  }
    
}

console.log(getUserAge());

// Задание 5: 

function example(c,d) {

if (isNaN(c) || isNaN(d)) {
  return 'Одно или оба значения не являются числом';
} 
else {
 return c * d;
}

}
console.log(example(12,5));
console.log(example('v','f'));


// Задание 6: 

function askNumber() {
    const userNumber = prompt('Ввведите число');

    if(isNaN (userNumber) || userNumber === "" || userNumber === " " || userNumber === null) {
      console.log('Переданный параметр не является числом')
    } else {
      console.log(`${userNumber} в кубе равняется ${userNumber ** 3}`);
    }

}

askNumber();

// Задание 7: 

function getCircleArea() {
  return Math.PI * this.radius ** 2;
}
function getCirclePerimeter() {
  return 2 * Math.PI * this.radius;
}

let circle1 = {
 radius: 5,
 getArea: getCircleArea,
 getPerimeter: getCirclePerimeter,

};

let circle2 = {
  radius: 10,
 getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,

};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

// // Задание 8:

// function whatSeason() {
//   let month = Number(prompt(`Введите номер месяца`));

//   if (month === 1 || month === 2 || month === 12) {
//     return alert(`Зима`);
    
//   } else if (month === 3 || month === 4 || month === 5) {
//     return alert(`Весна`);

//   } else if (month === 6 || month === 7 || month === 8) {
//     return alert(`Лето`);

//   } else if (month === 9 || month === 10 || month === 11) {
//     return alert(`Осень`);

//   }  else {
//     return alert(`Вы ввели неверное значение`);

//   }

// }

// whatSeason();

