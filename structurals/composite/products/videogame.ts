import { Product } from "./product";

export class VideoGame extends Product {
	// biome-ignore lint/complexity/noUselessConstructor: <explanation>
	public constructor(title: string, price: number) {
		super(title, price);
	}

	public calculatePrice(): number {
		return this.getPrice();
	}
}
