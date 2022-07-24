
import './App.css';
import React from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router,Switch, Routes, Route} from "react-router-dom";
function App() {
  return (
    
    <Router>
      <div className="app">
      
        <Routes>
          <Route path ="/" element = {<Home />}/>
          <Route path ="/checkout" element = {<Checkout />}/>
          <Route path ="/login" element = {<Login />}/>
        </Routes>
        </div>
    </Router>

    
  );
}

export default App;
