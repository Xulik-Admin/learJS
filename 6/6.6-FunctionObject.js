"use strict"

//! 1 Объект функции, NFE
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = function (value) {
        count = value;
    };

    counter.decrease = function () {
        count--;
    };

    return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 9)


//! 2 Сумма с произвольным количеством скобок
function sum(a) {
    let currentSum = a;

    function nextSum(b) {
        currentSum += b;
        return nextSum;
    }

    nextSum.toString = function () {
        return currentSum;
    };

    return nextSum;
}

