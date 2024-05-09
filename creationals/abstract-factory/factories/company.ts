import type { Gpu } from "../products/gpu";
import type { Monitor } from "../products/monitor";

export abstract class Company {
	public abstract createGpu(): Gpu;
	public abstract createMonitor(): Monitor;
}
