import { Grid, Container, Space } from '@mantine/core';
import { Climate, Weather } from '../../types';
import ClimateInfo from './ClimateInfo';

interface props {
  response: {
    data: Weather | null;
    error?: any;
  };
}

const ClimateGrid = ({ response }: props): JSX.Element => {
  return (
    <Container>
      <Grid justify="center">
        {response.data!.climates.map((climate: Climate) => {
          return (
            <Grid.Col span={4} key={climate.id}>
              <Space h="md" />
              <ClimateInfo
                month={climate.month}
                rainDays={climate.rainDays}
                maxTemperature={climate.maxTemperature}
                minTemperature={climate.minTemperature}
                rainFall={climate.rainFall}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ClimateGrid;
