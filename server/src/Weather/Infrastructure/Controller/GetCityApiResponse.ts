type Climate = {
  id: number;
  month: string;
  maxTemperature: string;
  minTemperature: string;
  rainDays: string;
  rainFall: string;
};

type Forecast = {
  id: number;
  date: string;
  weather: string;
  maxTemperature: string;
  minTemperature: string;
};

type City = {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  climates: Climate[];
  forecasts: Forecast[];
};

type ApplicationError = {
  message: string;
};

export type GetCityApiResponse = {
  data: City | null;
  error?: ApplicationError;
};
