import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModel } from './Shared/Infrastructure/Persistance/Model/CityModel';
import { ClimateModel } from './Shared/Infrastructure/Persistance/Model/ClimatesModel';
import { ForecastModel } from './Shared/Infrastructure/Persistance/Model/ForecastsModel';
import { GetCityWeatherHandler } from './Weather/Application/UseCases/GetCityWeatherHandler';
import { CityWeatherPresenter } from './Weather/Infrastructure/Controller/CityWeatherPresenter';
import { GetCityWeatherController } from './Weather/Infrastructure/Controller/GetCityWeatherController';
import { CityMapper } from './Weather/Infrastructure/Persistance/Mappers/CityMapper';
import { CityRepository } from './Weather/Infrastructure/Persistance/Repository/CityRepository';

const Controllers = [GetCityWeatherController];

const Handlers = [GetCityWeatherHandler];

const Repositories = [
  {
    provide: 'ICityRepository',
    useClass: CityRepository,
  },
];

const Mappers = [CityMapper];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'weather',
      entities: [CityModel, ClimateModel, ForecastModel],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([CityModel]),
  ],
  controllers: [...Controllers],
  providers: [...Handlers, ...Repositories, ...Mappers, CityWeatherPresenter],
})
export class AppModule {}
