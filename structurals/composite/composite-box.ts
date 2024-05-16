import type { Box } from "./box";

export class CompositeBox implements Box {
	private readonly children: Box[] = [];

	constructor(...boxes: Box[]) {
		this.children = boxes;
	}

	public calculatePrice(): number {
		const price: number = this.children.reduce(
			(total, box) => total + box.calculatePrice(),
			0,
		);
		return price;
	}
}
