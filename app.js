/*let x = prompt("enter your name");
console.log(x);

let member = prompt("select student or regular");
console.log(member);

if (member === "student") {
    alert("Welcome Scholar, " + x);
} else if (member === "regular") {
    alert("Welcome Member, " + x);
} else {
    alert("Welcome, " + x);
}

let type = prompt("non-fiction or fiction");
console.log(type);

let title = prompt("write the title ");
console.log(title);

alert("Your book reservation is being processed!");
console.log(x + member + type + title);*/


const bookstoreForm = document.getElementById("bookstore-form");
const usname = document.getElementById("username");
const memsh = document.getElementById("membershipType");
const bookGenre = document.getElementById("bookGenre");
const bookTitle = document.getElementById("bookTitle");
const resultCard = document.getElementById("result-card");

bookstoreForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    let usernameVal = usname.value;
    let memberVal = memsh.value.toLowerCase(); 
    let genreVal = bookGenre.value; 
    let titleVal = bookTitle.value;

    let finalMembership = "";
    if (memberVal === "student" || memberVal === "regular") {
        finalMembership = memberVal; 
    } else {
        finalMembership = "regular"; 
    }

    const studentArray = [
        usernameVal, 
        finalMembership, 
        genreVal, 
        titleVal
    ];

    resultCard.innerHTML = `
        <h3>Welcome, ${studentArray[0]}!</h3>
        <p><strong>Membership:</strong> ${studentArray[1]}</p>
        <p><strong>Genre:</strong> ${studentArray[2]}</p>
        <p><strong>Book Title:</strong> ${studentArray[3]}</p>
        <p style="color: green; margin-top: 10px;"><em>Your book reservation is being processed!</em></p>
    `;
});