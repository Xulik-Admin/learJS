"use strict"

//! Вывод каждую секунду

//? setInterval
function printNumbers(from, to) {
    let timeId = setInterval(function () {
        console.log(from);

        if (from == to) {
            clearInterval(timeId);
        }

        from++;
    }, 1000)
}

//? setTimeout
function printNumbers(from, to) {

    setTimeout(function go() {
        console.log(from);
        if (from < to) {
            setTimeout(go, 1000);
        }

        from++;
    }, 1000);
}


//! Что покажет setTimeout?
let i = 0;

setTimeout(() => console.log(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
    i++;
}
//* функция будет выполнена после цикла, так как js однопоточный язык и из-за этого цикл займет все ресурсы, а функция будет поставлена в очередь