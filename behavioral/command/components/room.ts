import { Component } from "./component";
import { Curtains } from "./curtains";

export class Room extends Component {
	private readonly curtains: Curtains;

	public constructor() {
		super();
		this.curtains = new Curtains();
	}

	public getCurtains(): Curtains {
		return this.curtains;
	}

	public curtainsOpen(): boolean {
		return this.curtains.isOpen();
	}
}
