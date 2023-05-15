import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Notfound } from './pages/Notfound';


function App(){

  return (
    <div className='App'>
        <Router>
            <div>
                Navbar
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/menu' element={<Menu />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='*' element={<Notfound />}/>
            </Routes>
        </Router>
    </div>
  );

}

export default App;