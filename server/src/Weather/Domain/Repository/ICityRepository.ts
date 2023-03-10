import { CityName } from 'src/Shared/Domain/Vo/CityName';
import { City } from '../Entity/City';

export interface ICityRepository {
  findOneByName(name: CityName): Promise<City>;
}
