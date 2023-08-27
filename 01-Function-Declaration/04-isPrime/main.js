// isPrime ?
// จำนวนเฉพาะ (Prime Number) คือจำนวนเต็มบวกที่มากกว่า 1
// และมีตัวหารลงตัวที่เป็นจำนวนเต็มบวกอยู่แค่ 2 ตัวก็คือ 1 และตัวมันเอง
// เช่น
// เลข 17 เป็นจำนวนเฉพาะ เพราะมีแค่ 1 และ 17 เท่านั้นที่สามารถหารเลข 17 ลงตัว
// เลข 23 เป็นจำนวนเฉพาะ เพราะมีแค่ 1 และ 23 เท่านั้นที่สามารถหารเลข 23 ลงตัว
// เลข 24 ไม่เป็นจำนวนเฉพาะ เพราะมี 1,2,4,6,8,12,24 ที่สามารถหารเลข 24 ลงตัว
// TASK : ให้สร้างฟังก์ชันตรวจสอบตัวเลข ว่าเลขนั้นเป็นจำนวนเฉพาะหรือไม่

// STAR PATTERN
// dynamics row => 1 for loop
// dynamics col => 1 for loop

// *
// **
// ***
// ****

// Prime Number
// ตัวตั้ง n (fixed)
// ตัวหาร dynamics => 1 LOOP

// n = 5 : 2 3 4
// n = 6 : 2 3 4 5
// n = 7 : 2 3 4 5 6

// let n = 7;
// let isPrime = true;

// for (let divider = 2; divider < n; divider++) {
//     if (n % divider == 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) console.log(n);

// DESIGN FN
// 1-INPUT ? => number ที่ใช้เช็ค
// 2-LOGIC IMPLEMENT ?
// 3-OUTPUT ? => boolean true,false
// number => bool
function checkPrime(num) {
    let isPrime = true;
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}

// checkPrime(7);
// checkPrime(13);
// checkPrime(61);
// checkPrime(63);
// checkPrime(83);
function printPrime(limit) {
    for (let n = 2; n <= limit; n++) {
        checkPrime(n);
    }
}
printPrime(24);
// checkPrime(2);
// checkPrime(3);
// checkPrime(4);
// checkPrime(5);
// checkPrime(6);
// checkPrime(7);
// checkPrime(8);
// checkPrime(9);
// checkPrime(10);
// checkPrime(11);
// checkPrime(12);
// checkPrime(13);

// ABSTRACTION
// - simple ideas => one idea
// - hiding complexity
// - simple interaction

//-------------------------------------------------------------------------

function isPrime(num){
    if(num > 1){
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i===0) return "Not prime number"
        }
        return "Prime number"
    } else {
        return "Not prime number"
    }
}

console.log(isPrime(19))