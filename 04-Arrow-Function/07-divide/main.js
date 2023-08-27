// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าหาร 7 ลงตัวหรือไม่

const isDivisibleBy7 = num => {
    return num % 7 === 0;
};

console.log(isDivisibleBy7(14)); // true (14 หาร 7 ลงตัว)
console.log(isDivisibleBy7(23)); // true (23 หาร 7 ไม่ลงตัว)