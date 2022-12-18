import './App.css';
import ClimateGrid from './Components/ClimateGrid/ClimateGrid';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="SearchBar">
        <SearchBar />
        <ClimateGrid />
      </div>
    </div>
  );
}

export default App;
