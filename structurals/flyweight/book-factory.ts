import { BookType } from "./book-type";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class BookFactory {
	private static readonly bookTypes: Map<string, BookType> = new Map();

	public static getBookTypes(
		type: string,
		distributor: string,
		otherData: string,
	): BookType {
		if (BookFactory.bookTypes.get(type) === null) {
			BookFactory.bookTypes.set(
				type,
				new BookType(type, distributor, otherData),
			);
		}

		return BookFactory.bookTypes.get(type) as BookType;
	}
}
