// Задание 1: 

let i = 0;
while (i < 2) {
  console.log ('Привет');
  i++;
}

// Задание 2: 

let a = 1;
while (a <= 5) {
  console.log (a);
  a++;
}

// Задание 3: 

let b = 7;
while (b <= 22 ) {
  console.log (b);
  b++;
}

// Задание 4: 

const obj = {
  Коля: '200',
  Вася: '300',
  Петя: '400',
};
for (let key in obj) {
  document.write(key + ' - зарплата ' + obj[key] + ' долларов ');
  console.log(key + ' зарплата ' + obj[key] + ' долларов ');
  break; 
}

// Задание 5:

let n = 1000;
let num = 0;
while (n>50) {
  num++;
  n /= 2;
}
console.log(n);
console.log(num);

// Задание 6:

for (let day = 4; day <= 31; day++) {
  if (day === 4 || day === 11 || day ===18 || day === 25 ) {
   console.log(`Сегодня пятница, ${day}`, 'число. Необходимо подготовить отчёт.') 
  }
}