// - ให้สร้างฟังก์ชัน login ที่มีพารามิเตอร์ 2 ตัว คือ username และ password
// - ถ้า username = “admin” และ password = “P@ssw0rd” แสดงว่า login สำเร็จ 
// แต่ถ้าไม่ใช่แสดงว่าไม่สำเร็จ

// function Login (username,password) {
//     // username = “admin”
//     console.log('username ${admin}')
//     // password = “P@ssw0rd”
//     console.log('password ${P@ssw0rd}')
// }
// Login();



// Drfine
function Login (username,password) {
    if (username == 'admin' && password === 'P@ssw0rd') {
        alert('Login สำเร็จ');
    } else {
        alert('Login ไม่สำเร็จ');
    }
}
let username = prompt('enter username');
let password = prompt('enter username');
// call
Login ("admin","P@ssw0rd");



//------------------------------------------------------------------------------------------

// function login(username,password){
//     if(username === "admin" && password == "P@ssw0rd") alert("Success")
//     else alert("Fail")
// }

// login("admin", "P@ssw0rd")
