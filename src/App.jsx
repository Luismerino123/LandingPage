import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarPage from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage"; 
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />  
        </Routes>
      </>
    </Router>
  );
}

export default App;
