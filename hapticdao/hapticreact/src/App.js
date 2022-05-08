import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
              <Navbar />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          UI IN PROGRESS.
        </p>
      </header>
    </div>
  );
}

export default App;
