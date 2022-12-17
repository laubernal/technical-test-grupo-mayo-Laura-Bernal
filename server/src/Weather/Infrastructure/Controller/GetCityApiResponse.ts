type Climate = {
  id: number;
  month: string;
  maxTemperature: number;
  minTemperature: number;
  rainDays: number;
  rainFall: number;
};

type Forecast = {
  id: number;
  date: string;
  weather: string;
  maxTemperature: number;
  minTemperature: number;
};

export type GetCityApiResponse = {
  id: number;
  name: string;
  climates: Climate[];
  forecasts: Forecast[];
};
