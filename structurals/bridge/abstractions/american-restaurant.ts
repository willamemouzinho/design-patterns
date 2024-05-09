import type { Pizza } from "../implementations/pizza";
import { Restaurant } from "./restaurant";

export class AmericanRestaurant extends Restaurant {
	// biome-ignore lint/complexity/noUselessConstructor: <explanation>
	public constructor(pizza: Pizza) {
		super(pizza);
	}

	addSauce(): void {
		this.pizza.setSauce("Super Secret Recipe");
	}

	addToppings(): void {
		this.pizza.setToppings("Everything");
	}

	makeCrust(): void {
		this.pizza.setCrust("Thick");
	}
}
