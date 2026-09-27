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
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const memsh = document.getElementById("membershipType");
const bookGenre = document.getElementById("bookGenre");
const bookTitle = document.getElementById("bookTitle");
const submitBtn = document.getElementById("submit-btn");
const resultCard = document.getElementById("result-card");

const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirmPassword-error");
const membershipError = document.getElementById("membership-error");
const genreError = document.getElementById("genre-error");
const titleError = document.getElementById("title-error");

function checkFormValidity() {
    let isValid = true;

    if (usname.value.trim() === "") {
        usernameError.style.display = "block";
        isValid = false;
    } else {
        usernameError.style.display = "none";
    }

    if (passwordInput.value.trim() === "") {
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (confirmPasswordInput.value.trim() === "") {
        confirmPasswordError.textContent = "This field is required";
        confirmPasswordError.style.display = "block";
        isValid = false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        confirmPasswordError.style.display = "block";
        isValid = false;
    } else {
        confirmPasswordError.style.display = "none";
    }

    if (memsh.value.trim() === "") {
        membershipError.style.display = "block";
        isValid = false;
    } else {
        membershipError.style.display = "none";
    }

    if (bookGenre.value.trim() === "") {
        genreError.style.display = "block";
        isValid = false;
    } else {
        genreError.style.display = "none";
    }

    if (bookTitle.value.trim() === "") {
        titleError.style.display = "block";
        isValid = false;
    } else {
        titleError.style.display = "none";
    }

    if (isValid) {
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.setAttribute("disabled", "true");
    }
}

const allInputs = [usname, passwordInput, confirmPasswordInput, memsh, bookGenre, bookTitle];
allInputs.forEach(input => {
    input.addEventListener("input", checkFormValidity);
});

bookstoreForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    let usernameVal = usname.value;
    let memberVal = memsh.value.toLowerCase(); 
    let genreVal = bookGenre.value; 
    let titleVal = bookTitle.value;

    let finalMembership = (memberVal === "student" || memberVal === "regular") ? memberVal : "regular";

    const studentArray = [usernameVal, finalMembership, genreVal, titleVal];

    resultCard.innerHTML = `
        <div style="background-color: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
            <strong>Success!</strong> User registration completed successfully.
        </div>
        <h3>Welcome, ${studentArray[0]}!</h3>
        <p><strong>Membership:</strong> ${studentArray[1]}</p>
        <p><strong>Genre:</strong> ${studentArray[2]}</p>
        <p><strong>Book Title:</strong> ${studentArray[3]}</p>
        <p style="color: green; margin-top: 10px;"><em>Your book reservation is being processed!</em></p>
    `;
});

const paragraphBox = document.getElementById("bookstore-paragraph");

let sperate = paragraphBox.innerText.split(" ");
let mapping = sperate.map(function(w) {
    if (w.length > 8) {
        return `<span style="background-color: yellow;">${w}</span>`;
    } else {
        return w;
    }
});
paragraphBox.innerHTML = mapping.join(" ");

const originalText = paragraphBox.innerHTML;
const formattedText = originalText.replaceAll(". ", ".<br>");
paragraphBox.innerHTML = formattedText;

const linkContainer = document.createElement("a");
linkContainer.href = "https://google.com";
linkContainer.textContent = "Source of the text (Google)";
linkContainer.target = "_blank";
paragraphBox.after(linkContainer);

const headingTag = document.querySelector("header h1");
const countContainer = document.createElement("p");
let wordCount = sperate.length;
countContainer.textContent = "Word count: " + wordCount;
headingTag.after(countContainer);
