import { AsusGpu } from "../products/asus-gpu";
import { AsusMonitor } from "../products/asus-monitor";
import type { Gpu } from "../products/gpu";
import type { Monitor } from "../products/monitor";
import { Company } from "./company";

export class AsusManufacturer extends Company {
	public createGpu(): Gpu {
		return new AsusGpu();
	}

	public createMonitor(): Monitor {
		return new AsusMonitor();
	}
}
