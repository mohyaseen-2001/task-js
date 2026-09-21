let x = prompt("enter your name");
console.log(x);
let member =prompt("select student or rugular");
console.log(member);
if (member === "student") {
    alert("Welcome Scholar, " + x);
}else if(member === "rugular"){

    alert("Welcome Member, " + x);

}else{

        alert("Welcome, " + x);

}
let type = prompt("non-fiction or fiction");
console.log(type);
let title = prompt("write the title ");
console.log(title)
alert("Your book reservation is being processed!")
console.log(x + member +type +title);
