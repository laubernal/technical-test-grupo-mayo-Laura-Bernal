import { CityName } from 'src/Shared/Domain/Vo/CityName';
import { Id } from 'src/Shared/Domain/Vo/Id';
import { StringVo } from 'src/Shared/Domain/Vo/String';
import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { ClimateModel } from './ClimatesModel';
import { ForecastModel } from './ForecastsModel';

@Entity('cities')
export class CityModel {
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

  @OneToMany(() => ClimateModel, climate => climate.city)
  climates!: ClimateModel[];

  @OneToMany(() => ForecastModel, forecast => forecast.city)
  forecasts!: ForecastModel[];
}
