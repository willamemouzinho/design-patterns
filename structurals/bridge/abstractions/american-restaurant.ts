import type { Pizza } from "../implementations/pizza";
import { Restaurant } from "./restaurant";

export class AmericanRestaurant extends Restaurant {
	// biome-ignore lint/complexity/noUselessConstructor: <explanation>
	public constructor(pizza: Pizza) {
		super(pizza);
	}

	public addSauce(): void {
		this.pizza.setSauce("Super Secret Recipe");
	}

	public addToppings(): void {
		this.pizza.setToppings("Everything");
	}

	public makeCrust(): void {
		this.pizza.setCrust("Thick");
	}
}
