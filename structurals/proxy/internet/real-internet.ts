import type { Internet } from "./internet";

export class RealInternet implements Internet {
	public connectTo(host: string): void {
		console.log(`Successfully opened connection to ${host}`);
	}
}
