import { Inject } from '@nestjs/common';
import { ApplicationResponse } from 'src/Shared/Domain/Entity/ApplicationResponse';
import { CityName } from 'src/Shared/Domain/Vo/CityName';
import { City } from 'src/Weather/Domain/Entity/City';
import { ICityRepository } from 'src/Weather/Domain/Repository/ICityRepository';
import { GetCityWeatherDto } from '../Dto/GetCityWeatherDto';

export class GetCityWeatherHandler {
  constructor(@Inject('ICityRepository') private readonly repository: ICityRepository) {}

  public async execute(getCityWeatherDto: GetCityWeatherDto): Promise<ApplicationResponse<City>> {
    try {
      const cityName = new CityName(getCityWeatherDto.name);

      const cityWeather = await this.repository.findOneByName(cityName);

      return ApplicationResponse.success(cityWeather);
    } catch (error: any) {
      return ApplicationResponse.error(error);
    }
  }
}
