import type { Pizza } from "../implementations/pizza";
import { Restaurant } from "./restaurant";

export class ItalianRestaurant extends Restaurant {
	// biome-ignore lint/complexity/noUselessConstructor: <explanation>
	public constructor(pizza: Pizza) {
		super(pizza);
	}

	addSauce(): void {
		this.pizza.setSauce("-");
	}

	addToppings(): void {
		this.pizza.setToppings("Oil");
	}

	makeCrust(): void {
		this.pizza.setCrust("Thin");
	}
}
