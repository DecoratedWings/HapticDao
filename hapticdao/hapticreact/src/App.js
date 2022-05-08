import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Send from './components/Send';
import Dao from './components/Dao';
import Marketplace from './components/Marketplace';
import Swap from './components/Swap';
import Cards from './components/Cards';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div >
      <Router>
       <Navbar />
        <Routes>
            <Route  path="/send" exact element={<Send/>} />
            <Route  path="/"  exact element={<Home/>} />
            <Route path="/dao" exact element={<Dao/>} />
            <Route path="/swap" exact element={<Swap/>} />
            <Route path="/marketplace" exact element={<Marketplace/>} />
            <Route path="/dashboard" exact element={<Dashboard/>} />

        </Routes>

      </Router>
      {/* <Home /> */}
      {/* <Cards/> */}

    </div>
  );
}

export default App;
