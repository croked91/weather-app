export interface WeatherCardT {
	city: string | null;
	temperature: string;
	callback?: () => void;
	icon: string;
}
