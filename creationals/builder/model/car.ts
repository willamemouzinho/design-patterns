export class Car {
	private readonly _id: number;
	private readonly _height: number;
	private readonly _brand: string;
	private readonly _model: string;
	private readonly _color: string;
	private readonly _engine: string;
	private readonly _nbrOfDoors: number;

	constructor(
		_id: number,
		_brand: string,
		_model: string,
		_color: string,
		_height: number,
		_engine: string,
		_nbrOfDoors: number,
	) {
		this._id = _id;
		this._brand = _brand;
		this._model = _model;
		this._color = _color;
		this._height = _height;
		this._engine = _engine;
		this._nbrOfDoors = _nbrOfDoors;
	}

	public toString(): string {
		return `
       Car {
           _id = ${this._id},
           _height = ${this._height},
           _brand = ${this._brand},
           _model = ${this._model},
           _color = ${this._color},
           _engine = ${this._engine},
           _nbrOfDoors = ${this._nbrOfDoors}
       }
   `;
	}
}
