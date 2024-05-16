import { BaseNotifierDecorator } from "./base-notifier-decorator";

export class WhatsappDecorator extends BaseNotifierDecorator {
	public send(message: string): void {
		super.send(message);
		const phoneNbr: string = this.databaseService.getPhoneNbrFromUsername(
			this.getUsername(),
		);
		console.log(`Sending ${message} by WhatsApp on ${phoneNbr}`);
	}
}
