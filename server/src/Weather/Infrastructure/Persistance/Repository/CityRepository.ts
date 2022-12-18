import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityName } from 'src/Shared/Domain/Vo/CityName';
import { City } from 'src/Weather/Domain/Entity/City';
import { ICityRepository } from 'src/Weather/Domain/Repository/ICityRepository';
import { CityMapper } from '../Mappers/CityMapper';
import { CityModel } from 'src/Shared/Infrastructure/Persistance/Model/CityModel';
import { RecordNotFoundError } from 'src/Shared/Domain/Error/RecordNotFoundError';

@Injectable()
export class CityRepository implements ICityRepository {
  constructor(
    @InjectRepository(CityModel) private typeormRepository: Repository<CityModel>,
    private readonly mapper: CityMapper
  ) {}

  public async findOneByName(name: CityName): Promise<City> {
    const result = await this.typeormRepository.findOne({
      where: {
        name,
      },
      relations: {
        climates: true,
        forecasts: true,
      },
    });

    if (!result) {
      throw new RecordNotFoundError();
    }

    return this.mapper.toDomain(result);
  }
}
