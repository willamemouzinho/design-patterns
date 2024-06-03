import type { Command } from "../commands/command";

export abstract class Component {
	private command: Command | null = null;

	public setCommand(command: Command): void {
		this.command = command;
	}

	public executeCommand(): void {
		this.command?.execute();
	}
}
