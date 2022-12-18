import { ApplicationResponse } from 'src/Shared/Domain/Entity/ApplicationResponse';
import { City } from 'src/Weather/Domain/Entity/City';
import { GetCityApiResponse } from './GetCityApiResponse';

export class CityPresenter {
  public present(response: ApplicationResponse<City>): GetCityApiResponse {
    if (response.succeded()) {
      const climates = response
        .data()!
        .climates()
        .map(climate => {
          return {
            id: climate.id().value,
            month: climate.month().value,
            maxTemperature: climate.maxTemperature().value,
            minTemperature: climate.minTemperature().value,
            rainDays: climate.rainDays().value,
            rainFall: climate.rainFalls().value,
          };
        });

      const forecasts = response
        .data()!
        .forecasts()
        .map(forecast => {
          return {
            id: forecast.id().value,
            date: forecast.date().toString(),
            weather: forecast.weather().value,
            maxTemperature: forecast.maxTemperature().value,
            minTemperature: forecast.minTemperature().value,
          };
        });

      return {
        data: {
          id: response.data()!.id().value,
          name: response.data()!.name().value,
          latitude: response.data()!.latitude().value,
          longitude: response.data()!.longitude().value,
          climates,
          forecasts,
        },
      };
    }

    return { data: null, error: { message: response.error()!.message } };
  }
}
