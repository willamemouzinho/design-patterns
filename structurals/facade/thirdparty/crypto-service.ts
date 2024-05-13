import type { DatabaseService } from "./database-service";
import type { User } from "./user";

// Everything added to this package is dummy and simulates the presence
// of a third-party library we want to re-use as mentioned in the video
class SomeComplexStuff {}

export abstract class CryptoService {
	private _databaseService: DatabaseService | null = null;
	private _complexStuff: SomeComplexStuff | null = null;

	public abstract buyCurrency(user: User, amount: number): void;
}
