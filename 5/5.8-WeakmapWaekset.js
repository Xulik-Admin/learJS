let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();
readMessages.add(messages[0]); //* смс прочитали)


//! 2
let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1)); //* просто передается второе значение даты