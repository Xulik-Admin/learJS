"use strict"

//! 1 Декоратор-шпион

function work(a, b) {
    alert(a + b); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    alert('call:' + args.join()); // "call:1,2", "call:4,5"
}

function spy(func) {
    function wrappedFunc(...args) {
        wrappedFunc.calls.push(args);

        return func.apply(this, args);
    }

    wrappedFunc.calls = [];

    return wrappedFunc;
}

//! 2 Задерживающий декоратор
function f(x) {
    alert(x);
}

// создаём обёртки
let f10000 = delay(f, 1000);
let f15000 = delay(f, 1500);

// f10000("test"); // показывает "test" после 1000 мс
// f15000("test"); // показывает "test" после 1500 мс

function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms)
    }
}


//! 3 Декоратор debounce
// let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

function debounce(f, ms) {

    let isCooldown = false;

    return function () {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };

}


//! 4 Тормозящий (throttling) декоратор
function f(a) {
    console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}