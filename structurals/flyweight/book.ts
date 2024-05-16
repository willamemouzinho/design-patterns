import type { BookType } from "./book-type";

export class Book {
	private readonly name: string;
	private readonly price: number;
	private readonly type: BookType;

	public constructor(name: string, price: number, type: BookType) {
		this.name = name;
		this.price = price;
		this.type = type;
	}

	public getName(): string {
		return this.name;
	}

	public getPrice(): number {
		return this.price;
	}

	public getType(): BookType {
		return this.type;
	}
}
