import { Singleton } from "./singleton";

console.log(Singleton.getInstance("Willame"));
const singleton2: Singleton = Singleton.getInstance("Adrian");

console.log(singleton2);
console.log(singleton2.getData());
