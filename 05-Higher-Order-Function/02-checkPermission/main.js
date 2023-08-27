// ให้สร้างฟังก์ชัน checkPermission โดยมีพารามิเตอร์ 3 ตัว

// - ตัวแรกเป็น role
// - ตัวที่สองเป็นฟังก์ชันและทำงานเมื่อ role มีค่าเท่ากับ “ADMIN”
// - ตัวที่สามเป็นฟังก์ชันและทำงานเมื่อ role ไม่ใช่ “ADMIN”
// - ให้ลองเรียกใช้ฟังก์ชันโดย
// - ถ้า role เป็น “ADMIN” ให้ alert “ACCESS GRANTED”
// - ถ้า role ไม่ใช่ “ADMIN” ให้ alert “ACCESS DENIED”

function checkPermission(role, adminAction, nonAdminAction) {
    if (role === "ADMIN") {
        adminAction();
    } else {
        nonAdminAction();
    }
}

checkPermission("ADMIN",function() {
        alert("ACCESS GRANTED");
    },
    function() {
        alert("ACCESS DENIED");
    }
);

checkPermission("USER",function() {
    alert("ACCESS GRANTED");
},
    function() {
        alert("ACCESS DENIED");
    }
);
