"use strict";

//! 1 Вычислить сумму чисел до данного
//? цикл
function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

//? рекурсия
function sumTo(n) {
    if (n == 1) {
        return n;
    }

    return n += sumTo(--n);
}

//? по формуле
function sumTo(n) {
    return n * (n + 1) / 2;
}


//! 2 Вычислить факториал
function factorial(n) {
    if (n == 1) {
        return n;
    }

    return n *= factorial(--n);
}


//! 3 Числа фибониччи (цикл быстрее рекурсии)
function fib(n) {
    let sum, a = 1, b = 1;

    if (n < 3) {
        return 1;
    }

    for (let i = 3; i <= n; i++) {
        sum = a + b;
        a = b
        b = sum;
    }

    return sum;
}


//! 4 Ввызов односвязного списка
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

//? цикл
function printList(list) {
    while (list) {
        alert(list.value);

        list = list.next;
    }
}

//? рекурсия
function printList(list) {
    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }
}


//!5 Вывод односвязного списка в обратном порядке (список брался из 4 задания)

//? цикл
function printListReverse(list) {
    let arr = []

    while (list) {
        arr.push(list.value)

        list = list.next;
    }

    arr.reverse()

    for (let item of arr) {
        console.log(item)
    }
}

//? рекурсия
function printListReverse(list) {
    if (list.next) {
        printList(list.next);
    }

    console.log(list.value);
}