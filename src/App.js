import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import env from "react-dotenv";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
