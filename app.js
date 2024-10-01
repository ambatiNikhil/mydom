let form = document.querySelector("#bookForm");
let bookName = document.querySelector("#bookName");
let authorName = document.querySelector("#bookAuthor");
let bookPrice = document.querySelector("#bookPrice");
let bookRecords = document.querySelector("#bookRecords");
bookRecords.classList.add("d-flex");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let bookItem = bookName.value;
  let authorItem = authorName.value;
  let priceItem = bookPrice.value;

  if (!bookItem) {
    alert("Enter valid name");
    bookName.focus();
    return;
  }

  if (!authorItem) {
    alert("Enter author name");
    authorName.focus();
    return;
  }

  if (!priceItem) {
    alert("Enter price of book");
    bookPrice.focus();
    return;
  }

  let bookContainer = document.createElement("div");
  bookContainer.classList.add("p-2");
  // bookContainer.classList.add("containerStyle")

 
    let book = document.createElement("input");
    book.value = bookItem;
    book.classList.add("inputStyle");
    book.setAttribute("readonly", "readonly");
    book.classList.add("m-2");
    bookContainer.appendChild(book);

    bookRecords.appendChild(bookContainer);

    let editButton = document.createElement("button");
    editButton.classList.add("bth");
    editButton.classList.add("mx-2");
    editButton.classList.add("btn-warning");
    editButton.innerHTML = "Edit";
    bookContainer.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("bth");
    deleteButton.classList.add("btn-danger");
    deleteButton.innerHTML = "Delete";
    bookContainer.appendChild(deleteButton);

    editButton.addEventListener("click", () => {
      if (editButton.innerHTML === "Edit") {
        book.removeAttribute("readonly");
        editButton.innerHTML = "Save";
        book.focus();
      } else {
        book.setAttribute("readonly", "readonly");
        editButton.innerHTML = "Edit";
      }
    });

    deleteButton.addEventListener("click", () => {
      bookRecords.removeChild(bookContainer);
    });

    let authorContainer = document.createElement("div");
    authorContainer.classList.add("p-2");

    let author = document.createElement("input");
    author.value = authorItem;
    author.classList.add("inputStyle");
    author.setAttribute("readonly", "readonly");
    author.classList.add("m-2");
    authorContainer.appendChild(author);

    bookRecords.appendChild(authorContainer);

    aEdit = document.createElement("button");
    aEdit.classList.add("bth", "btn-warning");
    aEdit.classList.add("mx-2");
    aEdit.innerHTML = "Edit";
    authorContainer.appendChild(aEdit);

    aDelete = document.createElement("button");
    aDelete.classList.add("btn", "btn-danger");
    aDelete.innerHTML = "Delete";
    authorContainer.appendChild(aDelete);

    aEdit.addEventListener("click", () => {
      if (aEdit.innerHTML === "Edit") {
        author.removeAttribute("readonly");
        aEdit.innerHTML = "Save";
        author.focus();
      } else {
        author.setAttribute("readonly", "readonly");
        aEdit.innerHTML = "Edit";
      }
    });

    aDelete.addEventListener("click", () => {
      bookRecords.removeChild(authorContainer);
    });

    //price
    let priceContainer = document.createElement("div");
    priceContainer.classList.add("p-2");

    let price = document.createElement("input");
    price.value = priceItem;
    price.classList.add("inputStyle");
    price.setAttribute("readonly", "readonly");
    price.classList.add("m-2");
    priceContainer.appendChild(price);

    bookRecords.appendChild(priceContainer);

    pEdit = document.createElement("button");
    pEdit.classList.add("bth", "btn-warning");
    pEdit.classList.add("mx-2");
    pEdit.innerHTML = "Edit";
    priceContainer.appendChild(pEdit);

    pDelete = document.createElement("button");
    pDelete.classList.add("btn", "btn-danger");
    pDelete.innerHTML = "Delete";
    priceContainer.appendChild(pDelete);

    pEdit.addEventListener("click", () => {
      if (pEdit.innerHTML === "Edit") {
        price.removeAttribute("readonly");
        pEdit.innerHTML = "Save";
        price.focus();
      } else {
        price.setAttribute("readonly", "readonly");
        pEdit.innerHTML = "Edit";
      }
    });

    pDelete.addEventListener("click", () => {
      bookRecords.removeChild(priceContainer);
    });

    bookName.value = "";
    authorName.value = "";
    bookPrice.value = "";
  

  //author
});
