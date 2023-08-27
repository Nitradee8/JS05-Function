// ให้เขียนฟังก์ชันคำนวณค่า factorial

const factorial = num => {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
};

const number = 7; // เลขที่ต้องการหา factorial
const result = factorial(number);
console.log(result); // 5040
