
let marks = {
    adi : 89,
    aditya : 9,
    shubham: 65,
    monika: 98
}
//Problem -1 
for(let i= 0;i<Object.keys(marks).length;i++){
    console.log("The marks of "+ Object.keys(marks)[i]+" are "+ marks[Object.keys(marks)[i]])
}

//Problem -2
for(let key in marks){
    console.log("The marks of "+ key +" are "+ marks[key])
}

//Problem -3
/*let cn = 56
let i
while(i != cn){
    console.log("Try again")
    i = prompt("Enter a number")
}
console.log("You have entered a correct number")
*/
//Problem -4
const mean =(a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))
