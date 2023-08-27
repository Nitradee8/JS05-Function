// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

function makeWorker() {
  let name = 'Pete';
  return function () {
    alert(name);
  };
}
let name = 'John';
let work = makeWorker();
work(); // * "Pete" เพราะ ฟังก์ชัน makeWorker ถูกเรียกและแสดงค่าตัวแปร name ออกมา 

