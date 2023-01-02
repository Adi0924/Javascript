let a = prompt("Hey what your age?");
// Number, string, undefined
a = Number.parseInt(a)//Converting the string to a nuumber
if(a<0){
    alert("This is a valid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a >=9){
  alert("You are a kid and you can driving after 18 ");
}
else{
  alert("This is an invalid age");
}
console.log("Done")