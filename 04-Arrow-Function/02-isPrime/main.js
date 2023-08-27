// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function

const checkPrime = num => {
    let isPrime = true;
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
};

const printPrime = limit => {
    for (let n = 2; n <= limit; n++) {
        checkPrime(n);
    }
};

printPrime(24);