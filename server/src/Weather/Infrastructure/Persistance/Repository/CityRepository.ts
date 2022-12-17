import { Injectable } from '@nestjs/common';
import { CityName } from 'src/Shared/Domain/Vo/CityName';
import { City } from 'src/Weather/Domain/Entity/City';
import { ICityRepository } from 'src/Weather/Domain/Repository/ICityRepository';

@Injectable()
export class CityRepository implements ICityRepository {
  public async findOneByName(name: CityName): Promise<City> {}
}
