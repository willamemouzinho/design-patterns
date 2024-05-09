import type { Burguer } from "./burguer";
import { Restaurant } from "./restaurant";
import { VeggieBurguer } from "./veggie-burguer";

export class VeggieBurguerRestaurant extends Restaurant {
	public createBurguer(): Burguer {
		console.log("Creating Veggie Burger...");
		return new VeggieBurguer();
	}
}
