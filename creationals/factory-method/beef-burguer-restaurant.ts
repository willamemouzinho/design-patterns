import { BeefBurguer } from "./beef-burguer";
import type { Burguer } from "./burguer";
import { Restaurant } from "./restaurant";

export class BeefBurguerRestaurant extends Restaurant {
	public createBurguer(): Burguer {
		console.log("Creating Beef Burger...");
		return new BeefBurguer();
	}
}
