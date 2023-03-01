alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 2 //* из-за того что алерт не возращает истинное значение
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // undefinde //* как и опсано выще, но при этом alert сработает, что и в варианте выше
alert( null || 2 && 3 || 4 ); // 3

let age = prompt('Возраст!')
if (age >= 14 && age <= 90){
    alert('Подходишь ')
}


if (age < 14 || age > 90){
    alert('не ну ты либо шкила, либо уважаемый гражданин')
}
if (!(age >= 14) || !(age <= 90)){
    alert('Повторная проверка, ничего личного)')
}

if (-1 || 0) alert( 'first' ); // true //* -1 дает true
if (-1 && 0) alert( 'second' ); // false
if (null || -1 && 1) alert( 'third' ); // true



let currentUser = prompt('Кто ты воин?', '')
if (currentUser == 'Админ') {
    let pass = prompt('Докажи, что у тебя есть власть -_-')
    if (pass == 'Я Главный') {
        alert('С возвращением, Владык3000')
    } else if (pass == '' || pass == null) {
        alert('Подозрительно')
    } else {
        alert('Кто ты такой и как ты сюда попал?!')
    }   
} else if (currentUser == '' || currentUser == null) {
    alert('И зачем ты сюда пришел?')
} else {
    alert('Чет не похож ты на воина -_-')
}