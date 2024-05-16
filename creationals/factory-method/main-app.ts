import { BeefBurguerRestaurant } from "./beef-burguer-restaurant";
import { VeggieBurguerRestaurant } from "./veggie-burguer-restaurant";

const beefResto = new BeefBurguerRestaurant();
beefResto.orderBurguer();

console.log("\n==========================================\n");

const veggieResto = new VeggieBurguerRestaurant();
veggieResto.orderBurguer();
