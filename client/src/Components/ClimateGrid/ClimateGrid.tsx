import { Grid, Container } from '@mantine/core';
import ClimateInfo from './ClimateInfo';

const ClimateGrid = (): JSX.Element => {
  return (
    <Container>
      <Grid>
        <Grid.Col span={4}>
          <ClimateInfo
            month="January"
            weather="Mostly Cloudy"
            maxTemperature="17"
            minTemperature="8"
            rainFall="170"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ClimateInfo
            month="February"
            weather="Light Rain"
            maxTemperature="17"
            minTemperature="8"
            rainFall="170"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ClimateInfo
            month="March"
            weather="Partly Cloudy"
            maxTemperature="17"
            minTemperature="8"
            rainFall="170"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ClimateInfo
            month="April"
            weather="Rain"
            maxTemperature="17"
            minTemperature="8"
            rainFall="170"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ClimateInfo
            month="May"
            weather="Scattered Showers"
            maxTemperature="17"
            minTemperature="8"
            rainFall="170"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ClimateInfo
            month="June"
            weather="Sunny"
            maxTemperature="17"
            minTemperature="8"
            rainFall="170"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ClimateInfo
            month="January"
            weather="cloudIcon"
            maxTemperature="17"
            minTemperature="8"
            rainFall="170"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ClimateInfo
            month="January"
            weather="cloudIcon"
            maxTemperature="17"
            minTemperature="8"
            rainFall="170"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ClimateInfo
            month="January"
            weather="cloudIcon"
            maxTemperature="17"
            minTemperature="8"
            rainFall="170"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ClimateInfo
            month="January"
            weather="cloudIcon"
            maxTemperature="17"
            minTemperature="8"
            rainFall="170"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ClimateInfo
            month="January"
            weather="cloudIcon"
            maxTemperature="17"
            minTemperature="8"
            rainFall="170"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ClimateInfo
            month="January"
            weather="cloudIcon"
            maxTemperature="17"
            minTemperature="8"
            rainFall="170"
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ClimateGrid;
