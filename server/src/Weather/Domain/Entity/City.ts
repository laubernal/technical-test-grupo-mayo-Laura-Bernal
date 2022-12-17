import { NumberVo } from 'src/Shared/Domain/Vo/Number.vo';
import { CityName } from '../../../Shared/Domain/Vo/CityName.vo';
import { Id } from '../../../Shared/Domain/Vo/Id.vo';
import { Climate } from './Climate';
import { Forecast } from './Forecast';

export class City {
  constructor(
    _id: Id,
    private readonly _name: CityName,
    private readonly _latitude: NumberVo,
    private readonly _longitude: NumberVo,
    private readonly _climates: Climate[],
    private readonly _forecasts: Forecast[],
    _createdAt?: Date,
    _updatedAt?: Date,
  ) {}

  public name(): CityName {
    return this._name;
  }

  public latitude(): NumberVo {
    return this._latitude;
  }

  public longitude(): NumberVo {
    return this._longitude;
  }

  public climates(): Climate[] {
    return this._climates;
  }

  public forecasts(): Forecast[] {
    return this._forecasts;
  }
}
