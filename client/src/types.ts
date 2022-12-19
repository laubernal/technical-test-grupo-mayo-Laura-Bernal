export type Climate = {
  id: number;
  month: string;
  maxTemperature: string;
  minTemperature: string;
  rainDays: string;
  rainFall: string;
};

export type Forecast = {
  id: number;
  date: string;
  weather: string;
  maxTemperature: string;
  minTemperature: string;
};

export type Weather = {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  climates: Climate[];
  forecasts: Forecast[];
};
