import type { Internet } from "./internet";
import { RealInternet } from "./real-internet";

export class ProxyInternet implements Internet {
	private static readonly _bannedSites: string[] = [];
	private readonly _internet: Internet = new RealInternet();

	static {
		ProxyInternet._bannedSites.push("banned.com");
	}

	public connectTo(host: string): void {
		if (ProxyInternet._bannedSites.includes(host)) {
			console.log(`Access Denied to ${host}`);
			return;
		}
	}
}
