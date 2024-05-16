export class Singleton {
	private static instance: Singleton | null = null;
	private readonly data: string;

	private constructor(data: string) {
		this.data = data;
	}

	public static getInstance(data: string) {
		if (Singleton.instance === null) {
			Singleton.instance = new Singleton(data);
		}
		return Singleton.instance;
	}

	public getData(): string {
		return this.data;
	}
}
