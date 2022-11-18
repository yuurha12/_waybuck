import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import NavBar from './components/Navbar';

//page
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
