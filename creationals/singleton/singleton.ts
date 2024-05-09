export class Singleton {
	private static _instance: Singleton | null = null;
	private readonly data: string;

	private constructor(data: string) {
		this.data = data;
	}

	public static getInstance(data: string) {
		if (Singleton._instance === null) {
			Singleton._instance = new Singleton(data);
		}
		return Singleton._instance;
	}

	public getData(): string {
		return this.data;
	}
}
