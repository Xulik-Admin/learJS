//! 1
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}
//* отличий в работе функции не будет, так как true возврощается только при выполнение условий, а в отальных будет возврощаться confirm


//! 2
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?')
}
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?')
}


//! 3
function min(a, b) {
    return (a > b) ? b : a
}


//! 4
function pow(x, n) {
    return x ** n
}

let x = +prompt('x =')
let n = +prompt('n =')
if ((n < 1) || (n % 1 != 0)) {
    alert('n не соответвует услоивиям')
} else {
    alert(pow(x, n))
}