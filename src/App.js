import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import NavBar from './components/Navbar';

//page
import Home from './pages/Home';
import ProdDetail from './pages/productDetail';
import Profile from './pages/Userprofile';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product-detail/:id" element={<ProdDetail />} />
        <Route exact path='/profile' element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
