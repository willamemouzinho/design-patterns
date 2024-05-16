import { FancyUIService } from "./fancy-uiservice";
import type { IMultiRestoApp } from "./i-muiti-resto-app";
import { JsonData } from "./json-data";
import type { XmlData } from "./xml-data";

export class FancyUIServiceAdapter implements IMultiRestoApp {
	private readonly fancyUIService: FancyUIService;

	public constructor() {
		this.fancyUIService = new FancyUIService();
	}

	public displayMenus(xmlData: XmlData): void {
		const jsonData: JsonData = this.convertXmlToJson(xmlData);
		console.log("Displaying Fancy Menus using converted JSON data...");
		this.fancyUIService.displayMenus(jsonData);
	}

	public displayRecommendations(xmlData: XmlData): void {
		const jsonData: JsonData = this.convertXmlToJson(xmlData);
		console.log(
			"Displaying Fancy Recommendations using converted JSON data...",
		);
		this.fancyUIService.displayRecommendations(jsonData);
	}

	private convertXmlToJson(xmlData: XmlData): JsonData {
		// Converts XmlData to JsonData and return it
		console.log("Converting XML to JSON...");
		return new JsonData();
	}
}
