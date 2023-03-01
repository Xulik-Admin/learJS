//! 1
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str) {
    return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
}

//! 2
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b))
}


//! 3
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.slice(i, 1);
            i--;
        }
    }
}

//! 4
arr.sort((a, b) => a - b);

//! 5
function copySorted(arr) {
    return arr.slice().sort()
}

//! 6
function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function (str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    }
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

//! 7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];
let names = users.map(item => item.name);

//! 8
vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));
alert(usersMapped[0].id);
alert(usersMapped[0].fullName);

//! 9
vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

//! 10
arr = [1, 2, 3];
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
alert(shuffle(arr));

//! 11
arr = [vasya, petya, masha];

alert(getAverageAge(arr));

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

//! 12
function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
alert(unique(strings));

//! 13
users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}