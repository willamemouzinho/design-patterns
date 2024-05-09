import type { Box } from "../box";

export abstract class Product implements Box {
	public abstract calculatePrice(): number;
	protected readonly title: string | null = null;
	protected readonly price: number | null = null;

	protected constructor(title: string, price: number) {
		this.title = title;
		this.price = price;
	}

	protected getTitle(): string {
		return this.title as string;
	}

	protected getPrice(): number {
		return this.price as number;
	}
}
