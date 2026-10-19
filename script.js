//your JS code here. If required.

const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

bookForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const isbn = document.getElementById("isbn").value.trim();

    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields");
        return;
    }

    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = title;

    const authorCell = document.createElement("td");
    authorCell.textContent = author;

    const isbnCell = document.createElement("td");
    isbnCell.textContent = isbn;

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "X";
    deleteButton.className = "delete";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", function() {
        row.remove();
    });

    deleteCell.appendChild(deleteButton);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(isbnCell);
    row.appendChild(deleteCell);

    bookList.appendChild(row);

    bookForm.reset();
});
