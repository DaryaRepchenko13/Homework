// Задание 1: 

function sum(a, b) {
  return a;
}
console.log(4, 8);

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

const squareNum = (num) => num ** 2;

// Задание 3.2: 

const squareNum1 = (num) => num ** 2;

// Задание 4: 

function userAge() {
  const userNumber = prompt('Сколько вам лет?');

  if(isNaN (userNumber) || userNumber === "" || userNumber === " " || userNumber === null) {
    console.log('Переданный параметр не является числом')
  } else {
    console.log(`${userNumber} в кубе равняется ${userNumber ** 3}`);
  }

}

userAge();

// Задание 5: 

let c = prompt('Введите первое число');
let d = prompt('Введите второе число');

function example(c,d) {

if (isNaN(c) || isNaN(d)) {
  return 'Одно или оба значения не являются числом';
} 
else {
 
}

}
console.log(example(c * d));



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

const circle1 = {
 radius: 5,
 pi: 3.14,

 getArea: getCircleArea,
 getPerimetr: getCirclePerimeter,

};

const circle2 = {
  radius: 10,
  pi: 3.14,
 
  getArea: getCircleArea,
  getPerimetr: getCirclePerimeter,

};

console.log(circle1.getArea());
console.log(Math.floor(getCircle1Perimeter()));
console.log(circle2.getArea());
console.log(Math.floor(getCircle2Perimeter()));

// Задание 8:

function whatSeason() {
  let month = Number(prompt(`Введите номер месяца`));

  if (month === 1 || month === 2 || month === 12) {
    return alert(`Зима`);
    
  } else if (month === 3 || month === 4 || month === 5) {
    return alert(`Весна`);

  } else if (month === 6 || month === 7 || month === 8) {
    return alert(`Лето`);

  } else if (month === 9 || month === 10 || month === 11) {
    return alert(`Осень`);

  }  else {
    return alert(`Вы ввели неверное значение`);

  }

}

whatSeason();

