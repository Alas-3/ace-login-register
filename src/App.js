import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Homepage /> } />
        <Route path='/Login' element={ <Login /> } />
        <Route path='/Signup' element={ <Signup /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;