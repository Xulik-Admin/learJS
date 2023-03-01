//! 1
alert(+prompt('a?', 0) + +prompt('b?', 0));

//! 2
alert(1.35.toFixed(1)); // 1.4
alert(6.35.toFixed(1)); // 6.3
//* такое происходит из-за ошибки представления подобных дробей как бесконечных.

//! 3
function readNumber() {
    let number;
    do {
        number = prompt('чило', 0);
    } while (!isFinite(number));
    if (number == null || number == '') return null;
    return +number;
}

//! 4
let i = 0;
while (i != 10) {
    i += 0.2;
}
//* из-за дроби i не будет ровно 10, а будет с небольшими отклонениями.

//! 5

function random(min, max) {
    return (min + Math.random() * (max - min))
}


//! 6
function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (++max - min))
}