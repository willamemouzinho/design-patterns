import type { Light } from "../components/light";
import type { Command } from "./command";

export class SwitchLightsCommand implements Command {
	private light: Light;

	public constructor(light: Light) {
		this.light = light;
	}

	public execute(): void {
		this.light.switchLights();
	}
}
