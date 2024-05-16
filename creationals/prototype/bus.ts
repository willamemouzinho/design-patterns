import { Vehicle } from "./vehicle";

export class Bus extends Vehicle {
	private readonly doors: number;

	public constructor(
		brand: string,
		model: string,
		color: string,
		doors: number,
	) {
		super(brand, model, color);
		this.doors = doors;
	}

	public clone(): Vehicle {
		const clone: Vehicle = Object.create(this);
		return clone;
	}

	public getDoors(): number {
		return this.doors;
	}
}
