import type { Builder } from "./model/builder";

export class Director {
	public buildBuggatti(builder: Builder): void {
		builder
			.brand("Bugatti")
			.color("Blue")
			.nbrOfDoors(2)
			.engine("8L")
			.height(115);
	}

	public buildLambo(builder: Builder): void {
		builder.brand("Lamborghini").model("Aventador").color("Yellow").height(120);
	}
}
