export interface Builder {
	id(id: number): Builder;
	brand(brand: string): Builder;
	model(model: string): Builder;
	color(color: string): Builder;
	height(height: number): Builder;
	engine(engine: string): Builder;
	nbrOfDoors(nbrOfDoors: number): Builder;
}
