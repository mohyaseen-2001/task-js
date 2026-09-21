var x = Number(prompt("enter the number"));
var y = Number(prompt("enter the number"))
let sum = x+y;
alert(sum)
let num = 5; 

switch (num) {
    case 1:
        console.log("ONE");
        break;
    case 2:
        console.log("TWO");
        break;
    case 3:
        console.log("THREE");
        break;
    case 4:
        console.log("FOUR");
        break;
    case 5:
        console.log("FIVE");
        break;
    case 6:
        console.log("SIX");
        break;
    case 7:
        console.log("SEVEN");
        break;
    case 8:
        console.log("EIGHT");
        break;
    case 9:
        console.log("NINE");
        break;
    default:
        console.log("PLEASE TRY AGAIN");
}




let birthYear = Number(prompt("Enter your birth year:"));

if ((2026 - birthYear) < 18) {
    alert("You may join the kids' program.");
} 
else if ((2026 - birthYear) >= 18 && (2026 - birthYear) <= 30) {
    alert("You are eligible. Start your application.");
} 
else if ((2026 - birthYear) > 60) {
    alert("You may join the seniors' program.");
} 
else {
    alert("You are not eligible. You may join other programs.");
}