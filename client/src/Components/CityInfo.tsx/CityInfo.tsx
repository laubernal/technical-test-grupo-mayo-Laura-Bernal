import { Grid, Text } from '@mantine/core';
import { Weather } from '../../types';

interface props {
  response: {
    data: Weather | null;
    error?: any;
  };
}

const CityInfo = ({ response }: props): JSX.Element => {
  return (
    <Grid justify="center" grow sx={{ marginBottom: '5vh' }}>
      <Grid.Col span={4}>
        <Text fz="lg" fw={400}>
          Latitude: {response.data!.latitude}
        </Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <Text fz="lg" fw={400}>
          Longitude: {response.data!.longitude}
        </Text>
      </Grid.Col>
    </Grid>
  );
};

export default CityInfo;
