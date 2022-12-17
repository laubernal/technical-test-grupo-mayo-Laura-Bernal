import { Id } from 'src/Shared/Domain/Vo/Id.vo';
import { Month } from 'src/Shared/Domain/Vo/Month.vo';
import { StringVo } from 'src/Shared/Domain/Vo/String.vo';
import { Temperature } from 'src/Shared/Domain/Vo/Temperature.vo';
import { Column, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { CityModel } from './CityModel';

@Entity('climates')
export class ClimatesModel {
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
    name: 'month',
    type: 'varchar',
    transformer: {
      from: (value: string): Month => new Month(value),
      to: (value: Month): string => value.value,
    },
  })
  month!: Month;

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

  @Column({
    name: 'rain_days',
    type: 'varchar',
    transformer: {
      from: (value: string): StringVo => new StringVo(value),
      to: (value: StringVo): string => value.value,
    },
  })
  rainDays!: StringVo;

  @Column({
    name: 'rain_fall',
    type: 'varchar',
    transformer: {
      from: (value: string): StringVo => new StringVo(value),
      to: (value: StringVo): string => value.value,
    },
  })
  rainFall!: StringVo;

  @ManyToOne(() => CityModel, city => city.climates)
  city!: CityModel;
}
