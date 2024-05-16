import { Vehicle } from "./vehicle";

export class Car extends Vehicle {
	private readonly topSpeed: number;

	public constructor(
		brand: string,
		model: string,
		color: string,
		topSpeed: number,
	) {
		super(brand, model, color);
		this.topSpeed = topSpeed;
	}

	public clone(): Vehicle {
		const clone: Vehicle = Object.create(this);
		return clone;
	}

	public getTopSpeed(): number {
		return this.topSpeed;
	}
}
