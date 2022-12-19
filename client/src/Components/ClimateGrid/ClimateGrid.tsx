import { Grid, Container, Title } from '@mantine/core';
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
      <Title order={4}>{response.data!.name} climate</Title>
      <Grid>
        {response.data!.climates.map((climate: Climate) => {
          return (
            <Grid.Col span={4} key={climate.id}>
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
