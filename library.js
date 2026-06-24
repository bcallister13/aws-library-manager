const API_URL = "https://dz4vo2bwawhyw5hyz3ji4tdpdy0jqbcp.lambda-url.us-east-2.on.aws/";
const RETURN_API_URL = "https://vwzx2dnnqib35ipas4opj7awlu0narik.lambda-url.us-east-2.on.aws/";

fetch(API_URL, {
method: "GET",
mode: "cors"
})
.then(response => response.json())
.then(data => {

const totalBooks = data.length;
const checkedOutBooks = data.filter(book => book.is_checked_out).length;
const availableBooks = totalBooks - checkedOutBooks;

document.getElementById("stats").innerText =
"Available: " + availableBooks + "/" + totalBooks +
" | Checked Out: " + checkedOutBooks;

const booksDiv = document.getElementById("books");

data.forEach(book => {

const bookCard = document.createElement("div");
bookCard.className = "book-card";

bookCard.innerHTML =
"<h3>" + book.title + "</h3>" +
"<p>Status: " +
(book.is_checked_out ? "Checked Out" : "available") +
"</p>" +
(book.is_checked_out
? "<button onclick=\"returnBook('" + book.book_id + "')\">Return Book</button>"
: "<button onclick=\"checkoutBook('" + book.book_id + "')\">Check Out</button>")


booksDiv.appendChild(bookCard);

});

});

function checkoutBook(bookId) {

fetch(API_URL, {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
book_id: bookId
})
})
.then(response => response.json())
.then(data => {
location.reload();
});
}

function logout() {
localStorage.removeItem("loggedInUser");
window.location.href = "login.html";
}

function returnBook(bookId) {

fetch(RETURN_API_URL, {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body:JSON.stringify({
book_id: bookId
})
})
.then(response => response.json())
.then(data => {
location.reload();
});
}

function filterBooks() {
const searchValue =
document.getElementById("search").value.toLowerCase();

const cards =
document.querySelectorAll(".book-card");

cards.forEach(card => {
const title =
card.querySelector("h3").innerText.toLowerCase();

if (title.includes(searchValue)) {
card.style.display = "block";
} else {
card.style.display = "none";
}
});
}
