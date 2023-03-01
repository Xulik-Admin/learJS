//! 1
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

//! 2
let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule));

function isEmpty(obj) {
    for (let property in obj) {
        return false;
    }
    return true;
}


//! 3
const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete"; // да

//! 4
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function sum(obj) {
    let sum = 0;
    for (let property in obj) {
        sum += obj[property];
    }
    return sum;
}

//! 5
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function propertyX2(obj) {
    for (let property in obj) {
        if (typeof (obj[property]) == 'number') {
            obj[property] *= 2;
        }
    }
    return obj;
}