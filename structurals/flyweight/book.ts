import type { BookType } from "./book-type";

export class Book {
	private readonly _name: string;
	private readonly _price: number;
	private readonly _type: BookType;

	constructor(name: string, price: number, type: BookType) {
		this._name = name;
		this._price = price;
		this._type = type;
	}

	public getName(): string {
		return this._name;
	}

	public getPrice(): number {
		return this._price;
	}

	public getType(): BookType {
		return this._type;
	}
}
