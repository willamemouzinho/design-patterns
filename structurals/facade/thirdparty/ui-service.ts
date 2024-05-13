// Everything added to this package is dummy and simulates the presence
// of a third-party library we want to re-use as mentioned in the video
export class UIService {
	public static getLoggedUserId(): string {
		return "";
	}

	public logIn(): void {
		console.log("Logging In...");
	}

	public logOut(): void {
		console.log("Logging Out...");
	}
}
