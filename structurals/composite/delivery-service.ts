import type { Box } from "./box";
import { CompositeBox } from "./composite-box";

export class DeliveryService {
	private box!: Box;

	public setupOrder(...boxes: Box[]): void {
		this.box = new CompositeBox(...boxes);
	}

	public calculateOrderPrice(): number {
		return this.box.calculatePrice();
	}
}
