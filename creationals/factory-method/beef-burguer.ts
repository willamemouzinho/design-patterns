import type { Burguer } from "./burguer";

export class BeefBurguer implements Burguer {
	public prepare(): void {
		// Prepare Beef Burger
		console.log("Preparing Beef Burger...");
	}
}
