// following two lines will run successfully due to js hoisting 
console.log(a)
great()
function great(){
    console.log("Good morning")
}
// great()
var a = 9;//Declaration hoisted to the top but initialization is not
console.log()
//  const and let is having behaviour change via var or const