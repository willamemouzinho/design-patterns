import { randomInt } from "node:crypto";
import type { Builder } from "./builder";
import { Car } from "./car";

export class CarBuilder implements Builder {
	private id: number;
	private height!: number;
	private brand!: string;
	private model!: string;
	private color!: string;
	private engine!: string;
	private nbrOfDoors!: number;

	public constructor() {
		this.id = randomInt(100);
	}

	public setId(id: number): CarBuilder {
		this.id = id;
		return this;
	}

	public setBrand(brand: string): CarBuilder {
		this.brand = brand;
		return this;
	}

	public setModel(model: string): CarBuilder {
		this.model = model;
		return this;
	}

	public setColor(color: string): CarBuilder {
		this.color = color;
		return this;
	}

	public setHeight(height: number): CarBuilder {
		this.height = height;
		return this;
	}

	public setEngine(engine: string): CarBuilder {
		this.engine = engine;
		return this;
	}

	public setNbrOfDoors(nbrOfDoors: number): CarBuilder {
		this.nbrOfDoors = nbrOfDoors;
		return this;
	}

	public build(): Car {
		return new Car(
			this.id,
			this.brand,
			this.model,
			this.color,
			this.height,
			this.engine,
			this.nbrOfDoors,
		);
	}
}
