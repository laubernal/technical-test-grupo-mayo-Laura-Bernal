import { IMapper } from 'src/Shared/Infrastructure/Persistance/Mapper/IMapper';
import { CityModel } from 'src/Shared/Infrastructure/Persistance/Model/CityModel';
import { City } from 'src/Weather/Domain/Entity/City';
import { Climate } from 'src/Weather/Domain/Entity/Climate';
import { Forecast } from 'src/Weather/Domain/Entity/Forecast';

export class CityMapper implements IMapper<City, CityModel> {
  public toModel(entity: City): CityModel {
    const model = new CityModel();

    model.id = entity.id();
    model.name = entity.name();
    model.lat = entity.latitude();
    model.lon = entity.longitude();

    return model;
  }

  public toDomain(dataModel: CityModel): City {
    const climates = dataModel.climates.map(climate => {
      return new Climate(
        climate.id,
        climate.month,
        climate.maxTemperature,
        climate.minTemperature,
        climate.rainDays,
        climate.rainFall
      );
    });

    const forecasts = dataModel.forecasts.map(forecast => {
      return new Forecast(
        forecast.id,
        forecast.date,
        forecast.weather,
        forecast.maxTemperature,
        forecast.minTemperature
      );
    });

    return new City(
      dataModel.id,
      dataModel.name,
      dataModel.lat,
      dataModel.lon,
      climates,
      forecasts
    );
  }
}
