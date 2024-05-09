import type { Pizza } from "../implementations/pizza";

export abstract class Restaurant {
	protected pizza: Pizza;

	protected constructor(pizza: Pizza) {
		this.pizza = pizza;
	}

	abstract addSauce(): void;
	abstract addToppings(): void;
	abstract makeCrust(): void;

	public deliver(): void {
		this.makeCrust();
		this.addSauce();
		this.addToppings();
		this.pizza.assemble();
		this.pizza.qualityCheck();
		console.log("Order in Progress!\n");
	}
}
