// "use strict"

//! 1 Связанная функция как метод
function f() {
    alert(this); // null
}

let user = {
    g: f.bind(null)
};

user.g();


//! 2 Повторный bind
function f() {
    // alert(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f(); // Вася
//* Можно сделать новую привязку, но не заменить существующую


//! 3 Свойство функции после bind
function sayHi() {
    alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

alert(bound.test); // undefined
//* в объекте нет свойства test


//! 4 Исправьте функцию, теряющую "this"
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


//! 5 Использование частично применённой функции для логина
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

user = {
    name: 'John',

    login(result) {
        alert(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?