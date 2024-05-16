import type { Gpu } from "./gpu";

export class MsiGpu implements Gpu {
	public assemble(): void {
		// Logic relevant to MSI Monitors
		console.log("Assembling MSI GPU");
	}
}
