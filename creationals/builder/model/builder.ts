export interface Builder {
	setId(id: number): Builder;
	setBrand(brand: string): Builder;
	setModel(model: string): Builder;
	setColor(color: string): Builder;
	setHeight(height: number): Builder;
	setEngine(engine: string): Builder;
	setNbrOfDoors(nbrOfDoors: number): Builder;
}
