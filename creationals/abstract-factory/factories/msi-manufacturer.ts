import type { Gpu } from "../products/gpu";
import type { Monitor } from "../products/monitor";
import { MsiGpu } from "../products/msi-gpu";
import { MsiMonitor } from "../products/msi-monitor";
import { Company } from "./company";

export class MsiManufacturer extends Company {
	public createGpu(): Gpu {
		return new MsiGpu();
	}
	public createMonitor(): Monitor {
		return new MsiMonitor();
	}
}
