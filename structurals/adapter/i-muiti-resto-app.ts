import type { XmlData } from "./xml-data";

export interface IMultiRestoApp {
	displayMenus(xmlData: XmlData): void;
	displayRecommendations(xmlData: XmlData): void;
}
