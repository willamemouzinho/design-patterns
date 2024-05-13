import { CryptoService } from "./crypto-service";
import type { User } from "./user";

// Everything added to this package is dummy and simulates the presence
// of a third-party library we want to re-use as mentioned in the video
export class EthereumService extends CryptoService {
	public buyCurrency(user: User, amount: number): void {
		console.log(`Buying ${amount} of Ethereum...`);
	}
}
