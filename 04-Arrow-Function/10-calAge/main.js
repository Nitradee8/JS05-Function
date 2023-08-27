// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)  
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020

const calculateAgeInDays = (birthYear, birthMonth, birthDay) => {
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay); // ลดค่าเดือนลง 1 เพื่อให้เข้ากับการใช้งานของ Date
    const currentDate = new Date(2020, 11, 31); // 31 ธันวาคม 2020

    const millisecondsPerDay = 24 * 60 * 60 * 1000; // จำนวนมิลลิวินาทีในหนึ่งวัน

    const ageInMilliseconds = currentDate - birthDate;
    const ageInDays = Math.floor(ageInMilliseconds / millisecondsPerDay);

    return ageInDays;
};

const ageInDays = calculateAgeInDays(1990, 1, 1); // 1 มกราคม 1990
console.log(ageInDays); // 11,335 วัน
