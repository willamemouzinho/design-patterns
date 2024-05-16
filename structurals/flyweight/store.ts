import { Book } from "./book";
import { BookFactory } from "./book-factory";
import type { BookType } from "./book-type";

export class Store {
	private readonly books: Book[] = [];

	public storeBook(
		name: string,
		price: number,
		type: string,
		distributor: string,
		otherData: string,
	): void {
		const bookType: BookType = BookFactory.getBookTypes(
			type,
			distributor,
			otherData,
		);
		this.books.push(new Book(name, price, bookType));
	}

	public displayBooks(): void {
		for (const book of this.books) {
			console.log(book);
		}
	}
}
