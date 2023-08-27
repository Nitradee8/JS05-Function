// บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// const showModal = alert;
// showModal("Execute modal"); // * alert => Execute modal

//----------------------------------------------

const showModal = alert();
showModal("Execute modal"); // ** Error เนื่องจาก alert() ไม่คืนค่าอะไรกลับมา

