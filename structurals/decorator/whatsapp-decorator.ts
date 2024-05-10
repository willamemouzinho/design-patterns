import { BaseNotifierDecorator } from "./base-notifier-decorator";
// import type { INotifier } from "./i-notifier";

export class WhatsappDecorator extends BaseNotifierDecorator {
	// constructor(wrapper: INotifier) {
	// 	super(wrapper);
	// }

	public send(message: string): void {
		super.send(message);
		const phoneNbr: string = this.databaseService.getPhoneNbrFromUsername(
			this.getUsername(),
		);
		console.log(`Sending ${message} by WhatsApp on ${phoneNbr}`);
	}
}
