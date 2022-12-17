import { CityName } from 'src/Shared/Domain/Vo/CityName';
import { Id } from 'src/Shared/Domain/Vo/Id';
import { StringVo } from 'src/Shared/Domain/Vo/String';
import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { ClimatesModel } from './ClimatesModel';
import { ForecastsModel } from './ForecastsModel';

@Entity('cities')
export class CityModel {
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
    name: 'name',
    type: 'varchar',
    transformer: {
      from: (value: string): CityName => new CityName(value),
      to: (value: CityName): string => value.value,
    },
  })
  name!: CityName;

  @Column({
    name: 'lat',
    type: 'varchar',
    transformer: {
      from: (value: string): StringVo => new StringVo(value),
      to: (value: StringVo): string => value.value,
    },
  })
  lat!: StringVo;

  @Column({
    name: 'lon',
    type: 'varchar',
    transformer: {
      from: (value: string): StringVo => new StringVo(value),
      to: (value: StringVo): string => value.value,
    },
  })
  lon!: StringVo;

  @OneToMany(() => ClimatesModel, climate => climate.city)
  climates!: ClimatesModel[];

  @OneToMany(() => ForecastsModel, forecast => forecast.city)
  forecasts!: ForecastsModel[];
}
