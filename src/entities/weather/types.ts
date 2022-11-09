export interface IWeatherCard {
    city: string | null;
    temperature: string;
    callback?: () => void;
    icon: string;
}

interface Coordinates {
    lat: string | null;
    lon: string | null;
}

export type CorrectName = string | null;

export interface ICityWeatherPayload {
    coordinates: Coordinates;
    correctName: CorrectName;
}