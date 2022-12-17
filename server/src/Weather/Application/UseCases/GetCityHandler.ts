import { Inject } from '@nestjs/common';
import { RecordNotFoundError } from 'src/Shared/Domain/Error/RecordNotFoundError';
import { CityName } from 'src/Shared/Domain/Vo/CityName';
import { City } from 'src/Weather/Domain/Entity/City';
import { ICityRepository } from 'src/Weather/Domain/Repository/ICityRepository';
import { GetCityDto } from '../Dto/GetCityDto';

export class GetCityHandler {
  constructor(@Inject('ICityRepository') private readonly repository: ICityRepository) {}

  public async execute(getCityDto: GetCityDto): Promise<City> {
    try {
      const cityName = new CityName(getCityDto.name);

      const city = await this.repository.findOneByName(cityName);

      if (city instanceof RecordNotFoundError) {
        throw new Error();
      }

      return city;
    } catch (error: any) {
      throw new Error();
    }
  }
}
