//! 1
let i = 1, b = 1;

let c = ++i; // 2 
let d = b++; // 1 

//! 2
let a = 2;

let x = 1 + (a *= 2); //! a:4, x:5

//! 3
"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //Nan
"  -9  " + 5 //  -9  5
"  -9  " - 5 //-14
null + 1 //1
undefined + 1 //NaN
" \t \n" - 2 //-2
//* \t \n:'' null:0 если минут строка преобразуется в число, если плюс в строчку добавляется число(преобразованное в строчку).

let s = prompt("Первое число?", 1);
let f = prompt("Второе число?", 2);

alert(+s + +f); //* унарный плюс