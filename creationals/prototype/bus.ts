import { Vehicle } from "./vehicle";

export class Bus extends Vehicle {
	private _doors: number;

	constructor(brand: string, model: string, color: string, doors: number) {
		super(brand, model, color);
		this._doors = doors;
	}

	public clone(): Vehicle {
		const clone: Vehicle = Object.create(this);
		return clone;
	}

	public getDoors(): number {
		return this._doors;
	}
}
