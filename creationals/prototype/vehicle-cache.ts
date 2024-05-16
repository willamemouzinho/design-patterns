import { Bus } from "./bus";
import { Car } from "./car";
import type { Vehicle } from "./vehicle";

export class VehicleCache {
	private readonly cache: Map<string, Vehicle> = new Map<string, Vehicle>();

	public constructor() {
		const car: Car = new Car("Bugatti", "Chiron", "Blue", 261);
		const bus: Bus = new Bus("Mercedes", "Setra", "White", 48);

		this.cache.set("Bugatti Chiron", car);
		this.cache.set("Mercedes Setra", bus);
	}

	public get(key: string): Vehicle {
		return this.cache.get(key) as Vehicle;
	}

	public getCache() {
		return this.cache;
	}

	public put(vehicles: Vehicle[]): void {
		for (const vehicle of vehicles) {
			this.cache.set(`${vehicle.getBrand()} ${vehicle.getModel()}`, vehicle);
		}
	}
}

// const vehicleCache = new VehicleCache();
// console.log(vehicleCache);
