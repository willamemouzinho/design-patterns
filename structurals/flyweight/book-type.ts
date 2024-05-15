export class BookType {
	private readonly _type: string;
	private readonly _distributor: string;
	private readonly _otherData: string;

	constructor(type: string, distributor: string, otherData: string) {
		this._type = type;
		this._distributor = distributor;
		this._otherData = otherData;
	}

	public getType(): string {
		return this._type;
	}

	public getDistributor(): string {
		return this._distributor;
	}

	public getOtherData(): string {
		return this._otherData;
	}
}
