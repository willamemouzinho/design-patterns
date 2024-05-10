import { FacebookDecorator } from "./facebook-decorator";
import type { INotifier } from "./i-notifier";
import { Notifier } from "./notifier";
import { WhatsappDecorator } from "./whatsapp-decorator";

const notifyAll: INotifier = new FacebookDecorator(
	new WhatsappDecorator(new Notifier("Willame")),
);
notifyAll.send("Like and Subscribe!!!");

console.log("\n==========================================\n");

const notifyFbMail: INotifier = new FacebookDecorator(new Notifier("Willame"));
notifyFbMail.send("Like and Subscribe!!!");
