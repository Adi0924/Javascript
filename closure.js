//  function sum(a,b){
//     return a + b;
//  }

//  console.log(sum(2,5));

// message = "Good Global"
// function hello1(){
//     let message = "Good morning"
// //   let  message ="Good afternoon"
//     console.log("Hello 1 :"+ message)
//     let c = function hello2(){
//         console.log("I am c"+ message)
//     }
//     return c
// }
 
// adi = hello1()
// adi()

// function init(){
//     var name = "Aditya";
//     function displayName(){
//         console.log(name); 
//     }
//     displayName();
// }
// init();

function init(){
    var name = 'Morzilla';
    function displayName(){
        console.log(name);
    }
    name = "Aditya"
    return displayName;
}
let c = init();
c()


// function returnfunc(){
// const x = () =>{
//     let a = 1
//     console.log(a)
//     const y = () =>{
//         // let a = 2
//         console.log(a)
//         const z = () =>{
//             // let a = 3
//             console.log(a)
//         }
//         z()
//     }
//     a = 999
//     y()
// } 
// return x
// }

let a = returnfunc()
a()