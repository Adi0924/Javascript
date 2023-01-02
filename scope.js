// var name ='amal';

// function sayName(){
//     var marks =10;
//     console.log(name);
// }

// // sayName{}
// console.log(marks);

// var x = 0;
// // Global Scope
// function first()
// {
//     //local Scopes #1
//     var x = 1;
//     console.log(x);
//     function childOfFirst(){
//         var x = 2;
//         console.log(x);
//         //local Scope #2
//     }
//     childOfFirst()
// }
 
// first()
// // global scope
// function second() {
//     console.log(x);
//     //local scope #3
// }
// // Global Scope
// second()


// var x = 10
// {
//     var x = 1;
//     console.log(x);
// }

// console.log(x);

// if(true){
//     let foo = 'bar';
// }

// console.log(foo);


// // Lexical Scope
// function Dada(){
//     var name = 'Aditya kumar';
//     // likes is not accessible here
//     function Papa(){
//         console.log(name);
//         // name is accessible here
//         // likes is not accessible here
//         function Beta(){
//             //innermost level of the scope chain 
//             //name is also accessible here
//             var likes ='Coding'
//         }
//         console.log(Likes);
//       Beta()  
//     }
//     Papa()
// }
// Dada()

// var friend ='Aditya Kumar';

// function getFriend(){
//     console.log(friend);

//     let enemy = "Peter";
//     return function getEnemy(){
//         console.log(enemy);
//     };
// }

// getFriend();

// function findFriend(){
//     let name = "Timmy";
//     let friends = ["Kate","Tom","Harry"];
//     return friends;
// }

// function findFamily(){
//     let name = "Peter";
//     let friends = ["Jimmy","Jilli","Beth"];
//     return name;
// }

// if(true){
//     // friend is in the global scope because of the 'var' keyword
//     var friend = 'Thomes';
//     //  likes is in the total scopes because of the 'let' keyword
//     let likes = 'Eating';
//     // skills is in the local scopes because of the 'const' keyword
//     const skills = 'Javascript and Java';
// }
// // can only access friend here
// console.log(friend);

// let p = 9
// function ax(){
//     let a = 8;
//     console.log(p)
//     console.log(a)
// }

// ax()
// console.log(p)
// console.log(a)

// {
//     let x = 2;
//     var x = 2;
// }


// function myFunction(){
//     let carName = 'Volvo';
// }

{
    var a = 8;
}
console.log(a)