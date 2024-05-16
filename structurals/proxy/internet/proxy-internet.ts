import type { Internet } from "./internet";
import { RealInternet } from "./real-internet";

export class ProxyInternet implements Internet {
	private static readonly bannedSites: string[] = [];
	private readonly internet: Internet = new RealInternet();

	static {
		ProxyInternet.bannedSites.push("banned.com");
	}

	public connectTo(host: string): void {
		if (ProxyInternet.bannedSites.includes(host)) {
			console.log(`Access Denied to ${host}`);
			return;
		}
		this.internet.connectTo(host);
	}
}
