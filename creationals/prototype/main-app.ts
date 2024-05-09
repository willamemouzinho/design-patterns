import { Bus } from "./bus";
import { Car } from "./car";
import type { Vehicle } from "./vehicle";
import { VehicleCache } from "./vehicle-cache";

const vehicles: Vehicle[] = [
	new Car("car_brand", "car_model", "car_color", 300),
	new Bus("bus_brand", "bus_model", "bus_color", 8),
];

const copyList: Vehicle[] = [];
for (const vehicle of vehicles) {
	copyList.push(vehicle);
}

for (const vehicle of copyList) {
	console.log(vehicle);
	console.log("\n");
}

console.log("==========================================\n");

const registry: VehicleCache = new VehicleCache();
registry.put(vehicles);
console.log(registry.getCache());
console.log(registry.get("car_brand car_model"));
