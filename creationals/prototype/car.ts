import { Vehicle } from "./vehicle";

export class Car extends Vehicle {
	private _topSpeed: number;

	constructor(brand: string, model: string, color: string, topSpeed: number) {
		super(brand, model, color);
		this._topSpeed = topSpeed;
	}

	// private constructor(car: Car) {
	// 	super(car);
	// 	this._topSpeed = car._topSpeed;
	// }

	public clone(): Vehicle {
		const clone: Vehicle = Object.create(this);
		return clone;
	}
}
