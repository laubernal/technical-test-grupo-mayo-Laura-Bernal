import { Inject } from '@nestjs/common';
import { ApplicationResponse } from 'src/Shared/Domain/Entity/ApplicationResponse';
import { CityName } from 'src/Shared/Domain/Vo/CityName';
import { City } from 'src/Weather/Domain/Entity/City';
import { ICityRepository } from 'src/Weather/Domain/Repository/ICityRepository';
import { GetCityDto } from '../Dto/GetCityDto';

export class GetCityHandler {
  constructor(@Inject('ICityRepository') private readonly repository: ICityRepository) {}

  public async execute(getCityDto: GetCityDto): Promise<ApplicationResponse<City>> {
    try {
      const cityName = new CityName(getCityDto.name);

      const city = await this.repository.findOneByName(cityName);

      return ApplicationResponse.success(city);
    } catch (error: any) {
      return ApplicationResponse.error(error);
    }
  }
}
