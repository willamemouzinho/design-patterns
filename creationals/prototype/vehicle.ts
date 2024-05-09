export abstract class Vehicle {
	private _brand: string;
	private _model: string;
	private _color: string;

	constructor(brand: string, model: string, color: string) {
		this._brand = brand;
		this._model = model;
		this._color = color;
	}
	// protected constructor(vehicle: Vehicle) {
	// 	this._brand = vehicle._brand;
	// 	this._model = vehicle._model;
	// 	this._color = vehicle._color;
	// }

	// protected createVehicle(vehicle: Vehicle) {
	// 	this._brand = vehicle._brand;
	// 	this._model = vehicle._model;
	// 	this._color = vehicle._color;
	// }

	public abstract clone(): Vehicle;

	public getBrand(): string {
		return this._brand;
	}

	public getModel(): string {
		return this._model;
	}

	public getColor(): string {
		return this._color;
	}
}
