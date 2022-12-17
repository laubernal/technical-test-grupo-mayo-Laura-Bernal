import { StringVo } from 'src/Shared/Domain/Vo/String.vo';
import { CityName } from '../../../Shared/Domain/Vo/CityName.vo';
import { Id } from '../../../Shared/Domain/Vo/Id.vo';
import { Climate } from './Climate';
import { Forecast } from './Forecast';

export class City {
  constructor(
    private readonly _id: Id,
    private readonly _name: CityName,
    private readonly _latitude: StringVo,
    private readonly _longitude: StringVo,
    private readonly _climates: Climate[],
    private readonly _forecasts: Forecast[],
  ) {}

  public id(): Id {
    return this._id;
  }

  public name(): CityName {
    return this._name;
  }

  public latitude(): StringVo {
    return this._latitude;
  }

  public longitude(): StringVo {
    return this._longitude;
  }

  public climates(): Climate[] {
    return this._climates;
  }

  public forecasts(): Forecast[] {
    return this._forecasts;
  }
}
