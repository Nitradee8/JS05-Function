// printPrime
// ให้สร้างฟังก์ชันรับรับพารามิเตอร์เป็นตัวเลข
// แสดง Prime number ทั้งหมด โดยแสดงตั้งแต่ 2 ถึงตัวเลขที่รับมาเป็นพารามิเตอร์

// printPrime(7); // 2, 3, 5, 7
// printPrime(13); // 2, 3, 5, 7, 11, 13
// printPrime(14); // 2, 3, 5, 7, 11, 13

function isPrime(num) {
    for (let d = 2; d < num; d++) {
        // console.log(d);
        if (num % d == 0) {
            return false;
        }
    }
    return true;
}
function printPrime(limit) {
    for (let n = 2; n <= limit; n++) {
        if (isPrime(n)) {
            console.log(n);
        }
    }
}
printPrime(50);
