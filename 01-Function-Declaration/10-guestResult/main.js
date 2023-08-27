// บรรทัด \*, \*\*, ให้ผลลัพธ์เป็นอะไร เพราะอะไร

function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // *  sayHi(age) {if (age < 12) alert('Hi kid');}
console.log(sayHi(10)); // ** Hi kid => undefined 

