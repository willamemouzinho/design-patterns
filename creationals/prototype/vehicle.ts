export abstract class Vehicle {
	private brand: string;
	private model: string;
	private color: string;

	public constructor(brand: string, model: string, color: string) {
		this.brand = brand;
		this.model = model;
		this.color = color;
	}

	public abstract clone(): Vehicle;

	public getBrand(): string {
		return this.brand;
	}

	public getModel(): string {
		return this.model;
	}

	public getColor(): string {
		return this.color;
	}
}
