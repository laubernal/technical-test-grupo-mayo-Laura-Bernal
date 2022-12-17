import { Climate } from 'src/Weather/Domain/Entity/Climate';
import { Forecast } from 'src/Weather/Domain/Entity/Forecast';

export class GetCityResponse {
  constructor(
    public id: string,
    public name: string,
    public climates: Climate[],
    public forecasts: Forecast[],
  ) {}
}
