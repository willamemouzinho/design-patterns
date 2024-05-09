import { FancyUIService } from "./fancy-uiservice";
import type { IMultiRestoApp } from "./i-muiti-resto-app";
import { JsonData } from "./json-data";
import type { XmlData } from "./xml-data";

export class FancyUIServiceAdapter implements IMultiRestoApp {
	private readonly _fancyUIService: FancyUIService;

	constructor() {
		this._fancyUIService = new FancyUIService();
	}

	public displayMenus(xmlData: XmlData): void {
		const jsonData: JsonData = this.convertXmlToJson(xmlData);
		console.log("Displaying Fancy Menus using converted JSON data...\n");
		this._fancyUIService.displayMenus(jsonData);
	}

	public displayRecommendations(xmlData: XmlData): void {
		const jsonData: JsonData = this.convertXmlToJson(xmlData);
		console.log(
			"Displaying Fancy Recommendations using converted JSON data...\n",
		);
		this._fancyUIService.displayRecommendations(jsonData);
	}

	private convertXmlToJson(xmlData: XmlData): JsonData {
		// Converts XmlData to JsonData and return it
		console.log("Converting XML to JSON...\n");
		return new JsonData();
	}
}
