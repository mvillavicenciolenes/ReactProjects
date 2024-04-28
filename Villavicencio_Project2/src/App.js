//App.js
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/NavBar';
import Home from './components/Home';
import BronxPage from './components/boroughs/BronxPage'
import BrooklynPage from './components/boroughs/BrooklynPage'
import ManhattanPage from './components/boroughs/ManhattanPage' 
import QueensPage from './components/boroughs/QueensPage' 
import StatenIslandPage from './components/boroughs/StatenIslandPage' 

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/Bronx" element={<BronxPage />} />
            <Route path='/Brooklyn' element={<BrooklynPage />} />
            <Route path='/Manhattan' element={<ManhattanPage />} />
            <Route path='/Queens' element={<QueensPage />} />
            <Route path='/StatenIsland' element={<StatenIslandPage />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
