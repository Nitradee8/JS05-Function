// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร


// function sayHi(age) {
//   if (age < 12) alert("Hi kid");
// }
// console.log(sayHi); // * alert Hi kid
// console.log(sayHi(10)); // ** undefined
//----------------------------------------------------------


function sayHi(name) {
    if (name) {
      alert("Hi " + name);
      return;
    } else {
      return "Who are you";
    }
  }
  console.log(sayHi("John")); // *** alert Hi John
  console.log(sayHi()); // **** undefined => return "Who are you"