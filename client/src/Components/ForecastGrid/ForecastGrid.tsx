import { Container, Grid } from '@mantine/core';
import { Forecast, Weather } from '../../types';
import ForecastInfo from './ForecastInfo';

interface props {
  response: {
    data: Weather | null;
    error?: any;
  };
}

const ForecastGrid = ({ response }: props): JSX.Element => {
  return (
    <Container>
      {response.data?.forecasts.map((forecast: Forecast) => {
        return (
          <ForecastInfo
            date={forecast.date}
            weather={forecast.weather}
            maxTemperature={forecast.maxTemperature}
            minTemperature={forecast.minTemperature}
          ></ForecastInfo>
        );
      })}
    </Container>
  );
};

export default ForecastGrid;
