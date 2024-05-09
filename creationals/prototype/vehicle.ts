export abstract class Vehicle {
	private _brand: string;
	private _model: string;
	private _color: string;

	constructor(brand: string, model: string, color: string) {
		this._brand = brand;
		this._model = model;
		this._color = color;
	}

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
