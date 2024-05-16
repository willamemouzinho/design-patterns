import type { Builder } from "./model/builder";

export class Director {
	public buildBuggatti(builder: Builder): void {
		builder
			.setBrand("Bugatti")
			.setColor("Blue")
			.setNbrOfDoors(2)
			.setEngine("8L")
			.setHeight(115);
	}

	public buildLambo(builder: Builder): void {
		builder
			.setBrand("Lamborghini")
			.setModel("Aventador")
			.setColor("Yellow")
			.setHeight(120);
	}
}
