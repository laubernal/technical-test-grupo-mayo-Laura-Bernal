import { Container, Tabs, Title } from '@mantine/core';
import { useState } from 'react';
import './App.css';
import CityInfo from './Components/CityInfo.tsx/CityInfo';
import ClimateGrid from './Components/ClimateGrid/ClimateGrid';
import ForecastTable from './Components/ForecastTable/ForecastTable';
import RecordNotFoundErrorPage from './Components/RecordNotFoundError/RecordNotFoundErrorPage';
import SearchBar from './Components/SearchBar/SearchBar';
import { Weather } from './types';

function App() {
  const [value, setValue] = useState<string>('');
  const [response, setResponse] = useState<{ data: Weather | null; error?: any }>({ data: null });

  return (
    <Container size="md" className="App">
      <Container className="SearchBar">
        <Title order={2} size="h2" sx={{ marginBottom: '7vh' }}>
          Laura Bernal's technical test for Grupo Mayo
        </Title>
        <SearchBar value={value} setValue={setValue} setResponse={setResponse} />
      </Container>
      {response.data && (
        <Container sx={{ marginTop: '7vh', marginBottom: '20vh' }}>
          <CityInfo response={response} />

          <Tabs variant="outline" radius="md" defaultValue="forecast">
            <Tabs.List grow position="center">
              <Tabs.Tab value="forecast">
                <Title fz="lg">Forecast</Title>
              </Tabs.Tab>
              <Tabs.Tab value="climate">
                <Title fz="lg">Climate</Title>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="forecast" pt="xs">
              {response.data && <ForecastTable response={response} />}
            </Tabs.Panel>

            <Tabs.Panel value="climate" pt="xs">
              {response.data && <ClimateGrid response={response} />}
            </Tabs.Panel>
          </Tabs>
        </Container>
      )}
      {response.error && <RecordNotFoundErrorPage />}
    </Container>
  );
}

export default App;
