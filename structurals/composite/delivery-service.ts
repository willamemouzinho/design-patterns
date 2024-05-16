import type { Box } from "./box";
import { CompositeBox } from "./composite-box";

export class DeliveryService {
	private box: Box | null = null;

	public setupOrder(...boxes: Box[]): void {
		this.box = new CompositeBox(...boxes);
	}

	public calculateOrderPrice(): number {
		const orderPrice: number = this.box?.calculatePrice() ?? 0;
		return orderPrice;
	}
}
