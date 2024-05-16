import { BaseNotifierDecorator } from "./base-notifier-decorator";

export class FacebookDecorator extends BaseNotifierDecorator {
	public send(message: string): void {
		super.send(message);
		const fbName: string = this.databaseService.getFBNameFromUsername(
			this.getUsername(),
		);
		console.log(`Sending ${message} on Facebook to ${fbName}`);
	}
}
