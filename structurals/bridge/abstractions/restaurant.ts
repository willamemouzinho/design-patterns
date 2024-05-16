import type { Pizza } from "../implementations/pizza";

export abstract class Restaurant {
	protected pizza: Pizza;

	protected constructor(pizza: Pizza) {
		this.pizza = pizza;
	}

	public abstract addSauce(): void;
	public abstract addToppings(): void;
	public abstract makeCrust(): void;

	public deliver(): void {
		this.makeCrust();
		this.addSauce();
		this.addToppings();
		this.pizza.assemble();
		this.pizza.qualityCheck();
		console.log("Order in Progress!");
	}
}
