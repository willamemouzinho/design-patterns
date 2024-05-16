import { AmericanRestaurant } from "./abstractions/american-restaurant";
import { ItalianRestaurant } from "./abstractions/italian-restaurant";
import type { Restaurant } from "./abstractions/restaurant";
import { PepperonePizza } from "./implementations/pepperoni-pizza";
import { VeggiePizza } from "./implementations/veggie-pizza";

const americanRestaurant: Restaurant = new AmericanRestaurant(
	new PepperonePizza(),
);
americanRestaurant.deliver();

console.log("\n==========================================\n");

const italianRestaurant: Restaurant = new ItalianRestaurant(new VeggiePizza());
italianRestaurant.deliver();
