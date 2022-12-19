import { useState } from 'react';
import './App.css';
import ClimateGrid from './Components/ClimateGrid/ClimateGrid';
import ForecastGrid from './Components/ForecastGrid/ForecastGrid';
import SearchBar from './Components/SearchBar/SearchBar';
import { Weather } from './types';

function App() {
  const [value, setValue] = useState<string>('');
  const [response, setResponse] = useState<{ data: Weather | null; error?: any }>({ data: null });

  return (
    <div className="App">
      <div className="SearchBar">
        <SearchBar value={value} setValue={setValue} setResponse={setResponse} />
        {response.data && <ClimateGrid response={response} />}
        {response.data && <ForecastGrid response={response} />}
      </div>
    </div>
  );
}

export default App;
