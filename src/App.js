import logo from './logo-white.png';
import './App.css';
import Shares from './components/shares/Shares';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lauching Soon.
        </p>
      </header>
      <body>
        <Shares />
      </body>
    </div>
  );
}

export default App;
