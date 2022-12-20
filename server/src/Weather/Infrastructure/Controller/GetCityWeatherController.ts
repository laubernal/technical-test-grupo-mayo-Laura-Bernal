import { Controller, Get, Query } from '@nestjs/common';
import { GetCityWeatherDto } from 'src/Weather/Application/Dto/GetCityWeatherDto';
import { GetCityWeatherHandler } from 'src/Weather/Application/UseCases/GetCityWeatherHandler';
import { CityWeatherPresenter } from './CityWeatherPresenter';
import { GetCityWeatherApiRequest } from './GetCityWeatherApiRequest';
import { GetCityWeatherApiResponse } from './GetCityWeatherApiResponse';

@Controller()
export class GetCityWeatherController {
  constructor(
    private readonly handler: GetCityWeatherHandler,
    private readonly presenter: CityWeatherPresenter
  ) {}

  @Get('/city')
  public async GetCity(
    @Query() queryParams: GetCityWeatherApiRequest
  ): Promise<GetCityWeatherApiResponse> {
    const getCityWeatherDto = new GetCityWeatherDto(queryParams.search);

    const response = await this.handler.execute(getCityWeatherDto);

    return this.presenter.present(response);
  }
}
