import type { IMultiRestoApp } from "./i-muiti-resto-app";
import type { XmlData } from "./xml-data";

export class MultiRestoApp implements IMultiRestoApp {
	public displayMenus(xmlData: XmlData): void {
		// Displays menus using XML data
		console.log("Displaying Menus using XML data...");
	}

	public displayRecommendations(xmlData: XmlData): void {
		// Displays recommendations using XML data
		console.log("Displaying Recommendations using XML data...");
	}
}
