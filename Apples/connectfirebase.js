import { app } from "./firebase.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const booksListRef = document.querySelector("#booksList");

const db = getFirestore(app);

async function getBooks() {
  const booksCollection = collection(db, "books");
  const bookDocs = await getDocs(booksCollection);

  booksListRef.innerHTML = "";
  for (let i = 0; i < bookDocs.docs.length; i++) {
    const books = bookDocs.docs[i];
    const bookData = books.data();

    booksListRef.innerHTML += `<li>${bookData.title} (${bookData.yearPublished})</li>`;
  }
}

async function addBook() {
  const bookName = prompt("Toppings:");
  const yearPublished = prompt("Quantity:");

  const booksCollection = collection(db, "books");

  await addDoc(booksCollection, {
    title: bookName,
    yearPublished: yearPublished,
  });

  getBooks();
}

document.querySelector(".addFoodButton").onclick = addBook;

getBooks();
