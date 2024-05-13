import { User } from "./user";

// Everything added to this package is dummy and simulates the presence
// of a third-party library we want to re-use as mentioned in the video
export class DatabaseService {
	public getUser(userId: string): User {
		return new User("A1", "Willame", 1000, "BRL", "123456LNS");
	}
}
