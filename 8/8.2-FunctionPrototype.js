"use strict";

//! 1 Изменяем "prototype"
function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

alert(rabbit.eats); // true

Rabbit.prototype = {};

alert(rabbit.eats); // ? true

Rabbit.prototype.eats = false;

alert(rabbit.eats); // ? false

delete rabbit.eats;

alert(rabbit.eats); // ? true

delete Rabbit.prototype.eats;

alert(rabbit.eats); // ? undefined


//! 2 Создайте новый объект с помощью уже существующего
let obj2 = new obj.constructor();
//* Да можно использовать такой способ, только prototype не должны перезаписывать