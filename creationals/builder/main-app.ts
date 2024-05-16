import { Director } from "./director";
import { CarBuilder } from "./model/car-builder";
// import { CarSchemaBuilder } from "./model/car-schema-builder";

const director: Director = new Director();

const builder: CarBuilder = new CarBuilder();
director.buildBuggatti(builder);
builder.setModel("Chiron");
console.log(builder.build());

// const schemaBuilder: CarSchemaBuilder = new CarSchemaBuilder();
// director.buildLambo(schemaBuilder);
// schemaBuilder.setEngine("90").setNbrOfDoors(3);
// console.log(schemaBuilder.build());
