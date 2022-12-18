import { Id } from 'src/Shared/Domain/Vo/Id';
import { Month } from 'src/Shared/Domain/Vo/Month';
import { StringVo } from 'src/Shared/Domain/Vo/String';
import { Temperature } from 'src/Shared/Domain/Vo/Temperature';
import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CityModel } from './CityModel';

@Entity('climates')
export class ClimateModel {
  @PrimaryColumn({
    name: 'id',
    type: 'int',
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

  @Column({
    name: 'city_id',
    type: 'int',
    transformer: {
      from: (value: number): Id => new Id(value),
      to: (value: Id): number => value.value,
    },
  })
  cityId!: Id;

  @ManyToOne(() => CityModel, city => city.climates)
  @JoinColumn({
    name: 'city_id',
    referencedColumnName: 'id',
  })
  city!: CityModel;
}
