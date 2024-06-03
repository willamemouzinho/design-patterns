import type { Curtains } from "../components/curtains";
import type { Command } from "./command";

export class OpenCloseCurtainsCommand implements Command {
	private curtains: Curtains;

	public constructor(curtains: Curtains) {
		this.curtains = curtains;
	}

	public execute(): void {
		this.curtains.openClose();
	}
}
