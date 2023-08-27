// ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year 
// - leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว --
// - ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว

//หารด้วย 4 ลงตัว
// 1800 => false
// 1900 => false
// 2000 => true

// 100 ลงตัวไม่เป็น leap year *** ยกเว้นหาร 400 ลงตัวเป็น leap year
// ที่เหลือหาร 4 ลงตัว เป็น leap year

// 1 year == 1 รอบของการโคจรรอบดวงอาทิตย์ == 365.24219 days

// 1 year == 365.00 (เศษ 0.242199)
// 2 year == 365.00 (เศษ 0.242199)
// 3 year == 365.00 (เศษ 0.242199)
// 4 year == 365.00 (เศษ 0.242199) + 1 Day (4*0.24199 == 0.96 เกิน 0.04)

//ชด 25 ครั้ง ==> เกินไป 25 * 0.04 วัน => 1 วัน

// 100 ไม่ควรชด

// isleapyear : YEAR => BOOLEAN (ต้องการฟังก์ชั่นที่ชดเชยด้วย boolean)
// 4,100,400

const isLeapYear = (year) => {
    
    // #1
    // if (year % 4 === 0 && year % 100 !=0) {
    //     return ture;
    // } else if (year % 100 === 0 && year % 400 != 0) {
    //     return false;
    // } else if (year % 400 == 0) {
    //     return ture;
    // } else {
    //     return false;
    // }
    // };

    //หรือ  // #2

    // if (year % 400 == 0) {
    //     return true;
    // } else if (year % 100 == 0) {
    //     return false;
    // } else if (year % 4 == 0){
    //     return true;
    // } else {
    //     return false;
    // }
    // };

    //หรือ  // #3

    // if (year % 400 == 0) {
    //     return true;
    // }
    // if (year % 100 == 0) {
    //     return true;
    // }
    // if (year % 4 == 0){
    //     return true;
    // }
    // return false;
    // };

    //หรือ  // #4

    // if (year % 100 === 0) {
    //     return year % 400 == 0;
        //แปลงจาก 
        // if (year % 400 == 0) {
        //     return true;
        // }
        // if (year % 100 == 0) {
        //     return true;
        // }
    // }
    // return year % 4 === 0;
    // };
        //แปลงจาก
        // if (year % 4 == 0){          
        //   return true;
        // }
        // return false;
        // };

    //หรือ  // #5
    // return year % 100  === 0 ? year % 400 == 0 : year % 4 === 0;
 };
 const isLeapYear = (year) => (year % 100 === 0 ? year % 400 == 0 : year % 4 === 0);