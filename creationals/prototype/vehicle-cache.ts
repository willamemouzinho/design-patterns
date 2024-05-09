import { Bus } from "./bus";
import { Car } from "./car";
import type { Vehicle } from "./vehicle";

export class Vehicle_Cache {
	private readonly _cache: Map<string, Vehicle> = new Map<string, Vehicle>();

	constructor() {
		const car: Car = new Car("Bugatti", "Chiron", "Blue", 261);
		const bus: Bus = new Bus("Mercedes", "Setra", "White", 48);

		this._cache.set("Bugatti Chiron", car);
		this._cache.set("Mercedes Setra", bus);
	}

	public get(key: string): Vehicle {
		return this._cache.get(key) as Vehicle;
	}

	public put(vehicles: Vehicle[]): void {
		for (const vehicle of vehicles) {
			this._cache.set(`${vehicle.getBrand()} ${vehicle.getModel()}`, vehicle);
		}
	}
}
