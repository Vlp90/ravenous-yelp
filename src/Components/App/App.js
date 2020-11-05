import './App.css';
import BusinessList from "../BusinessList/BusinessList"
import SearchBar from '../SearchBar/SearchBar'


function App() {
  return (
    <div className="app">
          <SearchBar />
        <BusinessList />
    </div>
  );
}

export default App;
