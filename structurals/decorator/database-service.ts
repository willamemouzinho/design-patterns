export class DatabaseService {
	public getMailFromUsername(username: string): string {
		return `${username} + @Mail`;
	}

	public getPhoneNbrFromUsername(username: string): string {
		return `${username} + @Phone`;
	}

	public getFBNameFromUsername(username: string): string {
		return `${username} + @Facebook`;
	}
}
