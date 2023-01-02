//for Loop
//Program to add first natural number
/*let sum = 0
let n = prompt("Enter the value of n")
for(let i = 0;i< 5;i++){
    sum += (i+1)
    console.log(i+1),"+"
}
console.log("Sum of first " +n+"natural number is"+sum)
*/
//for in loop
let obj = {
    harry:90,
    shubh:45,
    shiv: 56,
    ritika: 57,
    santosh:23
}
for(let a in obj){
    console.log("Marks of " + a + "are"+obj[a])
}
//for of loop
for(let b in "harry"){
    console.log("Marks of " + a + "are"+obj[a])
}