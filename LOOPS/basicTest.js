const array = ["Peter", 7, "Marianne", true, "Helle", 8];

for (let x of array) {
  console.log(x + " is a " + typeof x);
}

//foreach loop to create an li item for each book

const books = [
  { title: "Harry Potter", author: "JK Rowling" },
  { title: "Caazzoneso", author: "Io" },
  { title: "I promessi sposi", author: "Alessandro Manzoni" },
  { title: "Geronimo Stilton", author: "That one rat" },
  { title: "Boh Fraté", author: "Sempre io" },
];

const bookList = document.getElementById("book-list");

books.forEach((book) => {
  const li = document.createElement("li");
  li.textContent = `${book.title} by ${book.author}`;
  bookList.appendChild(li);
});

//function to find the largest number

function findLargest(a, b, c, d) {
  return Math.max(a, b, c, d);
}

let largest = findLargest(1, 2, 3, 4);
console.log(`${largest} is the largest number`);

//function that checks if the first parameter is within the range

function isItInRange(num, rangeStart, rangeEnd) {
  return num >= rangeStart && num <= rangeEnd;
}

let result = isItInRange(2, 1, 5);
console.log(result);

result = isItInRange(15, 5, 10);
console.log(result);
