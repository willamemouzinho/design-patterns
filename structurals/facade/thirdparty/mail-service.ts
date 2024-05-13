import type { User } from "./user";

// Everything added to this package is dummy and simulates the presence
// of a third-party library we want to re-use as mentioned in the video
export class MailService {
	public sendConfirmationMail(user: User): void {
		console.log(`Sending mail to ${user.name}`);
	}
}
