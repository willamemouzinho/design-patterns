import { BitcoinService } from "./bitcoin-service";
import type { CryptoService } from "./crypto-service";
import { EthereumService } from "./ethereum-service";

// Everything added to this package is dummy and simulates the presence
// of a third-party library we want to re-use as mentioned in the video
// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class CryptoFactory {
	public static getCryptoService(currency: string): CryptoService {
		if (currency === "BTC") {
			return new BitcoinService();
		}

		if (currency === "ETH") {
			return new EthereumService();
		}
		// More Stuff
		return new BitcoinService();
	}
}
