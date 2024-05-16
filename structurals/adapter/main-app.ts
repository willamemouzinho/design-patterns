import { FancyUIServiceAdapter } from "./fancy-uiservice-adapter";
import type { IMultiRestoApp } from "./i-muiti-resto-app";
import { MultiRestoApp } from "./multi-resto-app";
import { XmlData } from "./xml-data";

const myData: XmlData = new XmlData();

// Old UI
const multiRestoApp = new MultiRestoApp();
multiRestoApp.displayMenus(myData);
multiRestoApp.displayRecommendations(myData);

console.log("\n==========================================\n");

// New UI
const adapter: IMultiRestoApp = new FancyUIServiceAdapter();
adapter.displayMenus(myData);
adapter.displayRecommendations(myData);
