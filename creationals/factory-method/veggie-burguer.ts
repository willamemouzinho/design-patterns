import type { Burguer } from "./burguer";

export class VeggieBurguer implements Burguer {
	public prepare(): void {
		// Prepare Veggie Burger
		console.log("Preparing Veggie Burger...");
	}
}
