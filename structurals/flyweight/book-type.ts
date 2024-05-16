export class BookType {
	private readonly type: string;
	private readonly distributor: string;
	private readonly otherData: string;

	public constructor(type: string, distributor: string, otherData: string) {
		this.type = type;
		this.distributor = distributor;
		this.otherData = otherData;
	}

	public getType(): string {
		return this.type;
	}

	public getDistributor(): string {
		return this.distributor;
	}

	public getOtherData(): string {
		return this.otherData;
	}
}
