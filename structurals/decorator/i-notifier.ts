export interface INotifier {
	send(message: string): void;
	getUsername(): string;
}
