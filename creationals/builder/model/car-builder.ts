import type { Builder } from "./builder";
import { Car } from "./car";

export class CarBuilder implements Builder {
	private _id!: number;
	private _height!: number;
	private _brand!: string;
	private _model!: string;
	private _color!: string;
	private _engine!: string;
	private _nbrOfDoors!: number;

	public id(id: number): CarBuilder {
		this._id = id;
		return this;
	}

	public brand(brand: string): CarBuilder {
		this._brand = brand;
		return this;
	}

	public model(model: string): CarBuilder {
		this._model = model;
		return this;
	}

	public color(color: string): CarBuilder {
		this._color = color;
		return this;
	}

	public height(height: number): CarBuilder {
		this._height = height;
		return this;
	}

	public engine(engine: string): CarBuilder {
		this._engine = engine;
		return this;
	}

	public nbrOfDoors(nbrOfDoors: number): CarBuilder {
		this._nbrOfDoors = nbrOfDoors;
		return this;
	}

	public build(): Car {
		return new Car(
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
