//! 1
let a = 3;

while (a) {
    alert(a--); // 1
}


//! 2
let x = 0;
while (++i < 5) alert(i); // 1 2 3 4 


let y = 0;
while (i++ < 5) alert(i); // 1 2 3 4 5


//! 3
for (let i = 0; i < 5; i++) alert(i); // 0 1 2 3 4 
for (let i = 0; i < 5; ++i) alert(i); // 0 1 2 3 4 


//! 4
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) console.log(i)
}
let i = 0;


//! 5
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}


// ! 6

for (let i = 0; i < 1;) {
    let number = +prompt('Введите число')
    if (number > 100 || number == null) {
        i++;
    }
}


// ! 7
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

    for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime; //* надо запомнить эту темку
    }

    alert(i); 
}