// Everything added to this package is dummy and simulates the presence
// of a third-party library we want to re-use as mentioned in the video
export class User {
	constructor(
		public id: string,
		public name: string,
		public balance: number,
		public currency: string,
		public accountNbr: string,
	) {
		this.id = id;
		this.name = name;
		this.balance = balance;
		this.currency = currency;
		this.accountNbr = accountNbr;
	}
}
