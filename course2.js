
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

function guessWord() {

let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
fruits = fruits.sort(() => Math.random() - 0.5);
alert(fruits);

let firstFruit = prompt("Чему равнялся первый элемент массива?");
let lastFruit = prompt("Чему равнялся последний элемент массива?");

for (let i = 0; i < fruits.length; i++) {

    if (firstFruit === "" || firstFruit === " " || firstFruit === null || lastFruit === "" || lastFruit === " " || lastFruit === null) {
        alert("Ошибка элемента");
    } else if (fruits[0].toUpperCase().includes(firstFruit.toUpperCase()) && fruits[fruits.length - 1].toLocaleUpperCase().includes(lastFruit.toUpperCase())) {
        alert('Поздравляю с победой!Вы угадали!');
    } else if (fruits[0].toUpperCase().includes(firstFruit.toUpperCase()) || fruits[fruits.length - 1].toLocaleUpperCase().includes(lastFruit.toUpperCase())) {
        alert('Вы были близки к победе!');
    } else {
        alert("Вы не угадали((((")
    }    
    break
    }
}