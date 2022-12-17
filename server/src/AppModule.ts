import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModel } from './Shared/Infrastructure/Persistance/Model/CityModel';
import { ClimateModel } from './Shared/Infrastructure/Persistance/Model/ClimatesModel';
import { ForecastModel } from './Shared/Infrastructure/Persistance/Model/ForecastsModel';
import { GetCityHandler } from './Weather/Application/UseCases/GetCityHandler';
import { GetCityController } from './Weather/Infrastructure/Controller/GetCityController';
import { CityMapper } from './Weather/Infrastructure/Persistance/Mappers/CityMapper';
import { CityRepository } from './Weather/Infrastructure/Persistance/Repository/CityRepository';

const Controllers = [GetCityController];

const Handlers = [GetCityHandler];

const Repositories = [
  {
    provide: 'ICityRepository',
    useClass: CityRepository,
  },
];

const Mappers = [CityMapper];

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [CityModel, ClimateModel, ForecastModel],
    synchronize: false,
  }),],
  controllers: [...Controllers],
  providers: [...Handlers, ...Repositories, ...Mappers],
})
export class AppModule {}
