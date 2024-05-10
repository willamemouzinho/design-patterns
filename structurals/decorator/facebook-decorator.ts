import { BaseNotifierDecorator } from "./base-notifier-decorator";
// import type { INotifier } from "./i-notifier";

export class FacebookDecorator extends BaseNotifierDecorator {
	// constructor(wrapper: INotifier) {
	// 	super(wrapper);
	// }

	public send(message: string): void {
		super.send(message);
		const fbName: string = this.databaseService.getFBNameFromUsername(
			this.getUsername(),
		);
		console.log(`Sending ${message} on Facebook to ${fbName}`);
	}
}
