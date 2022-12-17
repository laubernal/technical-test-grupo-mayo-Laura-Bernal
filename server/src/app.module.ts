import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetCityController } from './Weather/Infrastructure/Controller/GetCityController';
import { CityRepository } from './Weather/Infrastructure/Persistance/Repository/CityRepository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [GetCityController],
  providers: [CityRepository],
})
export class AppModule {}
