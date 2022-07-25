import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket, ShoppingBasketOutlined, ShoppingBasketTwoTone } from '@material-ui/icons';
function Header() {
  return <nav className ="header">
        
        <Link to= "/login">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazonimg"/>
        </Link>
        
        {/* search bar and search icon at end*/ }
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon"/>       
        </div> 
        {/* first Link*/ }
        <div className="header__nav">
            <Link to= "/login" className="header__link" >
                <div className="header__option">
                    <span className='header__optionLineOne'>Hello Shreyas</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
            </Link>
            {/* 2nd Link*/ }
            <Link to= "/" className="header__link" >
                <div className="header__option">
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
            </Link>
            {/* 3rd Link*/ }
            <Link to= "/" className="header__link" >
                <div className="header__option">
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </Link>

            {/* 4th Link*/ }
            <Link to ="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasket/>
                    <span>0</span>
                </div>
            </Link>
        </div>
    </nav>
  
}

export default Header