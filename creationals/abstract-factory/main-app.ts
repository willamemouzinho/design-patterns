import { AsusManufacturer } from "./factories/asus-manufacturer";
import type { Company } from "./factories/company";
import { MsiManufacturer } from "./factories/msi-manufacturer";

const msi: Company = new MsiManufacturer();
const asus: Company = new AsusManufacturer();

for (const product of [
	msi.createGpu(),
	msi.createMonitor(),
	asus.createGpu(),
	asus.createMonitor(),
]) {
	product.assemble();
}
