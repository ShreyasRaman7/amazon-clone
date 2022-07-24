import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
function Header() {
  return <nav className ="header">
        //amazon image link
        <Link to= "/login">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazonimg"/>
        </Link>
        
        //search bar
        <input type="text" className="header__searchInput"/> 

        <SearchIcon className="header__searchIcon"/>        
        
    </nav>
  
}

export default Header