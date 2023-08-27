// ให้สร้างฟังก์ชันชื่อ findMin มีพารามิเตอร์ 2 ตัว
// ให้ผลลัพธ์เป็นค่าที่น้อยกว่าของพารามิเตอร์ทั้งสอง

function findMin(x, y) {
    if (x < y) {
      return x;
    } else {
      return y;
    }
  }
  
  const minValue = findMin(10, 3);
  console.log(minValue); 