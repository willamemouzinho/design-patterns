import type { Burguer } from "./burguer";

export abstract class Restaurant {
	public orderBurguer(): void {
		console.log("Ordering Burguer...");
		const burguer: Burguer = this.createBurguer();
		burguer.prepare();
	}

	public abstract createBurguer(): Burguer;
}
