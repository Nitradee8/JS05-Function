let x = 1;
function func() {
  console.log(x); // *Error
  let x = 2;
}
func();