import { Body, Controller, Get } from '@nestjs/common';
import { GetCityDto } from 'src/Weather/Application/Dto/GetCityDto';
import { GetCityHandler } from 'src/Weather/Application/UseCases/GetCityHandler';
import { GetCityApiRequest } from './GetCityApiRequest';
import { GetCityApiResponse } from './GetCityApiResponse';

@Controller()
export class GetCityController {
  constructor(private readonly handler: GetCityHandler) {}
  @Get('/city')
  //   public async GetCity(@Body() body: GetCityApiRequest): Promise<GetCityApiResponse> {
  public async GetCity(@Body() body: GetCityApiRequest): Promise<void> {
    const getCityDto = new GetCityDto(body.name);

    const city = await this.handler.execute(getCityDto);

    const climates = city.climates().map(climate => {
      return {
        id: climate.id().value,
        month: climate.month().value,
        maxTemperature: climate.maxTemperature().value,
        minTemperature: climate.minTemperature().value,
        rainDays: climate.rainDays().value,
        rainFall: climate.rainFalls().value,
      };
    });

    const forecasts = city.forecasts().map(forecast => {
      return {
        id: forecast.id().value,
        date: forecast.date().toString(),
        weather: forecast.weather().value,
        maxTemperature: forecast.maxTemperature().value,
        minTemperature: forecast.minTemperature().value,
      };
    });

    const cityWeather = {
      id: city.id().value,
      name: city.name().value,
      climates,
      forecasts,
    };
  }
}
