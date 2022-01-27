import './App.css';
import React, {Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import World from './Pages/World/World';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/world' element={<World />}/>
      </Routes>
    </>
  );
}

export default App;
