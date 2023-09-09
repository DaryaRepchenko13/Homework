// Задание 1: 

let password = 'пароль';
let enterPassword = prompt ('Введите пароль')
if (enterPassword === password) {
    alert('Пароль введен верно');
}
else (enterPassword != password); {
    alert('Пароль введен неправильно');
}

// Задание 2: 

let c = 0;
if (c>0 && c<10) {
  console.log('Верно');   
} else {
  console.log('Неверно'); 
}

// Число 10

let x = 10;
if (x>0 && x<10) {
  console.log('Верно');   
} else {
  console.log('Неверно'); 
}

// Число -3

let y = -3;
if (y>0 && y<10) {
  console.log('Верно');   
} else {
  console.log('Неверно'); 
}

// Число 2

let z = 2;
if (z>0 && z<10) {
  console.log('Верно');   
} else {
  console.log('Неверно'); 
}

// Задание 3:

let d = 77;
let e = 101;
if (d>100 || e>100 ) {
    console.log('Верно');
} else {
  console.log('Неверно'); 
}

// Задание 4:

let a = '2';
let b = '3';
alert(3 + 2);

// Задание 5:

let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
  case '1':
    console.log('Зима');
    break;
  case '2':
      console.log('Зима');
      break; 
  case '3':
    console.log('Весна');
    break;
  case '4':
    console.log('Весна');
    break;
  case '5':
    console.log('Весна');
    break;
  case '6':
    console.log('Лето');
    break; 
  case '7':
    console.log('Лето');
    break; 
  case '8':
    console.log('Лето');
    break; 
  case '9':
    console.log('Осень');
    break;  
  case '10':
    console.log('Осень');
    break; 
  case '11':
    console.log('Осень');
    break; 
  case '12':
    console.log('Зима');
    break; 
 default:
    console.log('Ошибка')
    break;
}

