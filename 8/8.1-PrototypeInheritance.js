"use stric";

//! 1 Работа с прототипами
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

alert(rabbit.jumps); // true

delete rabbit.jumps;

alert(rabbit.jumps); // null

delete animal.jumps;

alert(rabbit.jumps); // undefined


//! 2 Алгоритм поиска
let head = {
    glasses: 1
};

let table = {
    __proto__: head,
    pen: 3
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__: bed,
    money: 2000
};
//* по скорости будут одинаковы


//! 3 Куда будет произведена запись?
animal = {
    eat() {
        this.full = true;
    }
};

rabbit = {
    __proto__: animal
};

rabbit.eat(); //rebbit


//! 4 Почему наедаются оба хомяка?
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach = [food];
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert(lazy.stomach); // apple