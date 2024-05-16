import type { Pizza } from "../implementations/pizza";
import { Restaurant } from "./restaurant";

export class ItalianRestaurant extends Restaurant {
	// biome-ignore lint/complexity/noUselessConstructor: <explanation>
	public constructor(pizza: Pizza) {
		super(pizza);
	}

	public addSauce(): void {
		this.pizza.setSauce("-");
	}

	public addToppings(): void {
		this.pizza.setToppings("Oil");
	}

	public makeCrust(): void {
		this.pizza.setCrust("Thin");
	}
}
