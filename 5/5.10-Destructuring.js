let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false

//! 2
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = '';
    for (let [key, value] of Object.entries(salaries)) {
        if (value > maxSalary) {
            maxSalary < value;
            maxName = key;
        }
    }
    return maxName;
}