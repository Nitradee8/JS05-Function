// console.log('anonymous');

// #1 : Named finally, FN CSSStyleDeclaration
// function add () {}
//------------------------------------------------------------

// #2. Anonymous

// (function (message) {
//     console.log(message);
// })('hi');
//------------------------------------------------------------

// IIFE : Intermediate Invoke Function Expression

// (function (x, y) {
//     console.log(x + y);
// })(10, 5);
//------------------------------------------------------------

// console.log(
//     function(x, y) {
//         return x + y;
//     })(10, 5)
//------------------------------------------------------------

// let a = (function (x, y) {
//     return x + y;
// })(10, 7);

// console.log(a);

//------------------------------------------------------------
// #2B
// VARIABLE = Expression
// let myVar = ((5 * 2 * 20) / 2) % 7;

// VARIABLE = FN (FN == Expression)

// ASSIGN anonymous FN to varia
// const myFunc = function (x, y) {
//     return x + y;
// };

// console.log(myFunc(5, 10));

// const a = console.log;
// a('hi');

// ### anonymous (MODERN : ARROW SYNTAX)

let a = function (x) {
    return x ** 2;
}
// A: Shortest
let b = (x) => x ** 2;

console.log((a(3)));
console.log(b(3, 5));