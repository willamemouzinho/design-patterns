import { Store } from "./store";

const BOOK_TYPES = 2;
const BOOKS_TO_INSERT = 10_000_000;

const store: Store = new Store();

for (let i = 0; i < BOOKS_TO_INSERT / BOOK_TYPES; i++) {
	store.storeBook(
		getRandomName(),
		getRandomPrice(),
		"Action",
		"Follett",
		"Stuff",
	);
	store.storeBook(
		getRandomName(),
		getRandomPrice(),
		"Fantasy",
		"Ingram",
		"Extra",
	);
}
// store.displayBooks();
console.log(`${BOOKS_TO_INSERT} Books Inserted`);
console.log("\n==========================================\n");
console.log("Memory Usage: ");
console.log(
	`Book Size (20 bytes) * ${BOOKS_TO_INSERT} + BookTypes Size (30 bytes) * ${BOOK_TYPES}`,
);
console.log("\n==========================================\n");
console.log(
	`Total: ${
		(BOOKS_TO_INSERT * 20 + BOOK_TYPES * 30) / 1024 / 1024
	}MB (instead of ${(BOOKS_TO_INSERT * 50) / 1024 / 1024}MB)`,
);
// Tip: Try to comment out the @ToString annotation in the BookType class and check that indeed the same two objects are being referenced by all our books!

function getRandomName(): string {
	const books: string[] = [
		"book_1",
		"book_2",
		"book_3",
		"book_4",
		"book_5",
		"book_6",
		"book_7",
		"book_8",
		"book_9",
		"book_10",
	];
	return books[Math.floor(Math.random() * books.length)];
}

function getRandomPrice(): number {
	return Math.random() * (200 - 10) + 10;
}
