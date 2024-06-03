import { Component } from "./component";
import { Light } from "./light";

export class FloorLamp extends Component {
	private readonly light: Light;

	public constructor() {
		super();
		this.light = new Light();
	}

	public getLight(): Light {
		return this.light;
	}

	public isLightOn(): boolean {
		return this.light.isSwitchedOn();
	}
}
