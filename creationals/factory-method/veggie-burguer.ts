import type { Burguer } from "./burguer";

export class VeggieBurguer implements Burguer {
	prepare(): void {
		// Prepare Veggie Burger
		console.log("Preparing Veggie Burger...");
	}
}
