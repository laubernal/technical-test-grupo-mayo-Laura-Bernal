import { Container, Table } from '@mantine/core';
import { Forecast, Weather } from '../../types';
import ForecastInfo from './ForecastInfo';

interface props {
  response: {
    data: Weather | null;
    error?: any;
  };
}

const ForecastTable = ({ response }: props): JSX.Element => {
  return (
    <Container>
      <Table fontSize="lg" verticalSpacing='sm' highlightOnHover>
        {response.data!.forecasts.map((forecast: Forecast) => {
          return (
            <tbody>
              <ForecastInfo
                date={forecast.date}
                weather={forecast.weather}
                maxTemperature={forecast.maxTemperature}
                minTemperature={forecast.minTemperature}
              ></ForecastInfo>
            </tbody>
          );
        })}
      </Table>
    </Container>
  );
};

export default ForecastTable;
