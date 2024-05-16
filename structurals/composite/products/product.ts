import type { Box } from "../box";

export abstract class Product implements Box {
	protected readonly title: string;
	protected readonly price: number;

	protected constructor(title: string, price: number) {
		this.title = title;
		this.price = price;
	}

	public abstract calculatePrice(): number;

	protected getTitle(): string {
		return this.title;
	}

	protected getPrice(): number {
		return this.price;
	}
}
