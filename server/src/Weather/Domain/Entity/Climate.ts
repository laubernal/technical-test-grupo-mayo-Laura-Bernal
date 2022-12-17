import { Id } from 'src/Shared/Domain/Vo/Id.vo';
import { Month } from 'src/Shared/Domain/Vo/Month.vo';
import { StringVo } from 'src/Shared/Domain/Vo/String.vo';
import { Temperature } from 'src/Shared/Domain/Vo/Temperature.vo';

export class Climate {
  constructor(
    private readonly _id: Id,
    private readonly _month: Month,
    private readonly _maxTemperature: Temperature,
    private readonly _minTemperature: Temperature,
    private readonly _rainDays: StringVo,
    private readonly _rainFall: StringVo,
  ) {}

  public id(): Id {
    return this._id;
  }

  public month(): Month {
    return this._month;
  }

  public maxTemperature(): Temperature {
    return this._maxTemperature;
  }

  public minTemperature(): Temperature {
    return this._minTemperature;
  }

  public rainDays(): StringVo {
    return this._rainDays;
  }

  public rainFalls(): StringVo {
    return this._rainFall;
  }
}
