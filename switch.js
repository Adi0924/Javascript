switch (new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
            break;
    case 3:
        day = "Wednesday";
            break;
    case 4:
        day = "Thrusday";
            break;
    case 5:
        day = "Friday";
            break;
    case 6:
        day = "Saturday";
}

switch(new Date().getDay()){
    case 6:
        text = "Today is saturday";
    break;
    case 0:
        text ="Today is sunday";
    break;
    default:
    text = "Looking forward to the weekend";
}

//Ternary Operator

console.log("You can",(a<18? "not drive":"drive")) 
