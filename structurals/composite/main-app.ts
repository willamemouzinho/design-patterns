import { CompositeBox } from "./composite-box";
import { DeliveryService } from "./delivery-service";
import { Book } from "./products/book";
import { VideoGame } from "./products/videogame";

const deliveryService: DeliveryService = new DeliveryService();
deliveryService.setupOrder(
	new CompositeBox(new VideoGame("1", 100)),
	new CompositeBox(
		new CompositeBox(new Book("2", 200), new Book("3", 300)),
		new VideoGame("4", 400),
		new VideoGame("5", 500),
	),
);

console.log(deliveryService.calculateOrderPrice());
