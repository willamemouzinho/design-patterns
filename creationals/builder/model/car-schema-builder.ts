// import type { Builder } from "./builder";
// import { CarSchema } from "./car-schema";

// export class CarSchemaBuilder implements Builder {
// 	private id!: number;
// 	private height!: number;
// 	private brand!: string;
// 	private model!: string;
// 	private color!: string;
// 	private engine!: string;
// 	private nbrOfDoors!: number;

// 	public setId(id: number): CarSchemaBuilder {
// 		this.id = id;
// 		return this;
// 	}

// 	public setBrand(brand: string): CarSchemaBuilder {
// 		this.brand = brand;
// 		return this;
// 	}

// 	public setModel(model: string): CarSchemaBuilder {
// 		this.model = model;
// 		return this;
// 	}

// 	public setColor(color: string): CarSchemaBuilder {
// 		this.color = color;
// 		return this;
// 	}

// 	public setHeight(height: number): CarSchemaBuilder {
// 		this.height = height;
// 		return this;
// 	}

// 	public setEngine(engine: string): CarSchemaBuilder {
// 		this.engine = engine;
// 		return this;
// 	}

// 	public setNbrOfDoors(nbrOfDoors: number): CarSchemaBuilder {
// 		this.nbrOfDoors = nbrOfDoors;
// 		return this;
// 	}

// 	public build(): CarSchema {
// 		return new CarSchema(
// 			this.id,
// 			this.brand,
// 			this.model,
// 			this.color,
// 			this.height,
// 			this.engine,
// 			this.nbrOfDoors,
// 		);
// 	}
// }
