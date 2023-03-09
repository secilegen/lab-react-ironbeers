import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Beers from './components/Beers';
import { Route, Routes } from 'react-router-dom';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/beers' element={<Beers/>}></Route>
        <Route path='/random-beer' element={<RandomBeer/>}></Route>
        <Route path='/beers/:beerId' element={<BeerDetails/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
