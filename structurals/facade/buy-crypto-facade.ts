import { CryptoFactory } from "./thirdparty/crypto-factory";
import { DatabaseService } from "./thirdparty/database-service";
import { MailService } from "./thirdparty/mail-service";
import { UIService } from "./thirdparty/ui-service";
import type { User } from "./thirdparty/user";

export class BuyCryptoFacade {
	public buyCryptocurrency(amount: number, currency: string): void {
		const dbService: DatabaseService = new DatabaseService();
		const user: User = dbService.getUser(UIService.getLoggedUserId());

		if (user.balance < amount) {
			console.log("Insufficient balance to perform transaction");
			return;
		}

		CryptoFactory.getCryptoService(currency).buyCurrency(user, amount);
		const mailService: MailService = new MailService();
		mailService.sendConfirmationMail(user);
		console.log(`${amount} of ${currency} bought successfully!`);
	}
}
