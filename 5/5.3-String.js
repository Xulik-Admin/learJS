//! 1
ucFirst("вася") == "Вася";

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}


//! 2
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

//! 3
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)

truncate("Всем привет!", 20)

//! 4
alert(extractCurrencyValue('$120') === 120);
function extractCurrencyValue(str) {
    return +str.slice(1);
}