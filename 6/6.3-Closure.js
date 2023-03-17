"use strict"

//! 1 Независимы ли счётчики?
function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();  // замыкается одно значение
let counter2 = makeCounter(); // замыкается второе значение

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // 0
console.log(counter2()); // 1


//! 2 Объект счётчика
function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1


//! 3 Функция в if
let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

// sayHi(); // Невозможно вызвать так-как функция находится внутри блока if 


//! 4 Сумма с помощью замыканий
function sum(a) {
    return function (b) {
        return a + b;
    }
}


//! 5 Фильтрация с помощью функции
function inBetween(a, b) {
    return x => (a <= x && x <= b);
}

function inArray(arr) {
    return x => arr.includes(x);
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2


//! 6 Сортировать по полю
function byField(key) {
    return (key == 'name') ? ((a, b) => a.name > b.name ? 1 : -1) : ((a, b) => a.age > b.age ? 1 : -1);
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

// по имени (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);

users.sort(byField('name'));
users.sort(byField('age'));


//! 7 Армия функций
function makeArmy() {
    let shooters = [];
    let i = 0;

    while (i < 10) {
        let x = i; // нужно было исправить лексическое окружение

        let shooter = function () { // функция shooter
            console.log(x); // должна выводить порядковый номер
        };

        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 0
army[5](); // у 5-го стрелка будет номер 5