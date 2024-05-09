import type { Builder } from "./builder";
import { Car } from "./car";
import { CarSchema } from "./car-schema";

export class CarSchemaBuilder implements Builder {
	private _id!: number;
	private _height!: number;
	private _brand!: string;
	private _model!: string;
	private _color!: string;
	private _engine!: string;
	private _nbrOfDoors!: number;

	public id(id: number): CarSchemaBuilder {
		this._id = id;
		return this;
	}

	public brand(brand: string): CarSchemaBuilder {
		this._brand = brand;
		return this;
	}

	public model(model: string): CarSchemaBuilder {
		this._model = model;
		return this;
	}

	public color(color: string): CarSchemaBuilder {
		this._color = color;
		return this;
	}

	public height(height: number): CarSchemaBuilder {
		this._height = height;
		return this;
	}

	public engine(engine: string): CarSchemaBuilder {
		this._engine = engine;
		return this;
	}

	public nbrOfDoors(nbrOfDoors: number): CarSchemaBuilder {
		this._nbrOfDoors = nbrOfDoors;
		return this;
	}

	public build(): CarSchema {
		return new CarSchema(
			this._id,
			this._brand,
			this._model,
			this._color,
			this._height,
			this._engine,
			this._nbrOfDoors,
		);
	}
}
