import { BookType } from "./book-type";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class BookFactory {
	private static readonly _bookTypes: Map<string, BookType> = new Map();

	public static getBookTypes(
		type: string,
		distributor: string,
		otherData: string,
	): BookType {
		if (BookFactory._bookTypes.get(type) === null) {
			BookFactory._bookTypes.set(
				type,
				new BookType(type, distributor, otherData),
			);
		}

		return BookFactory._bookTypes.get(type) as BookType;
	}
}
