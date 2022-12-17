import { Id } from 'src/Shared/Domain/Vo/Id';
import { Temperature } from 'src/Shared/Domain/Vo/Temperature';
import { Weather } from 'src/Shared/Domain/Vo/Weather';
import { Column, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { CityModel } from './CityModel';

@Entity('forecasts')
export class ForecastModel {
  @PrimaryColumn({
    name: 'id',
    type: 'number',
    transformer: {
      from: (value: number): Id => new Id(value),
      to: (value: Id): number => value.value,
    },
  })
  id!: Id;

  @Column({
    name: 'date',
    type: 'date',
    transformer: {
      from: (value: string): Date => new Date(value),
      to: (value: Date): string => value.toString(),
    },
  })
  date!: Date;

  @Column({
    name: 'weather',
    type: 'varchar',
    transformer: {
      from: (value: string): Weather => new Weather(value),
      to: (value: Weather): string => value.value,
    },
  })
  weather!: Weather;

  @Column({
    name: 'min_temp',
    type: 'varchar',
    transformer: {
      from: (value: string): Temperature => new Temperature(value),
      to: (value: Temperature): string => value.value,
    },
  })
  minTemperature!: Temperature;

  @Column({
    name: 'max_temp',
    type: 'varchar',
    transformer: {
      from: (value: string): Temperature => new Temperature(value),
      to: (value: Temperature): string => value.value,
    },
  })
  maxTemperature!: Temperature;

  @ManyToOne(() => CityModel, city => city.forecasts)
  city!: CityModel;
}
