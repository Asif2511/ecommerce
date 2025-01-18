import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import NavBar from './componets/navbar';
import RegistrationForm from './pages/registratio';
import Home from './pages/home';
import Products from './pages/products';

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
       
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
