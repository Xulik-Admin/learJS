// //! 1
// if ("0") {
//     alert('Привет');
// }
// //* выведет так как строка не является пустой.


// //! 2
// let answer = prompt('Какое «официальное» название JavaScript?');
// if (answer == 'ECMAScript') {
//     alert('Верно!');
// } else {
//     alert('Не знаете? ECMAScript!');
// }


//! 3

let number = +prompt('Дайте мне сюда эти цифры!')
if (number > 0) {
    alert(1 + ' Они больше ничего')
} else if (number == 0) {
    alert(0 + ' Они равно нулю?!')
} else {
    alert(-1 + ' Они ниже пустоты!')
}


//! 4
let result = (a + b < 4) ? 'Мало' : 'Много';


//! 5
let message = (login == 'Сотрудник') ? 'Привет'
    : (login == 'Директор') ? 'Здравствуйте'
        : (login == '') ? 'Нет логина'
            : ''