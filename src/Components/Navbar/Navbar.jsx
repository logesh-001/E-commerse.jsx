import React, { useState } from 'react';
import "./Navbar.css";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState('Shop');

    const handleItemClick = (item) => {
        setMenu(item);
    };

    return (
        <div className="Navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li className={`menu-item ${menu === 'Shop' ? 'active' : ''}`} onClick={() => handleItemClick('Shop')}>
                    <Link style={{textDecoration:'none'}} to={'/'}>Shop</Link>
                </li>
                <li className={`menu-item ${menu === 'Men' ? 'active' : ''}`} onClick={() => handleItemClick('Men')}>
                    <Link style={{textDecoration:'none'}} to={'/men'}>Men</Link>
                </li>
                <li className={`menu-item ${menu === 'Women' ? 'active' : ''}`} onClick={() => handleItemClick('Women')}>
                    <Link style={{textDecoration:'none'}} to={'/women'}>Women</Link>
                </li>
                <li className={`menu-item ${menu === 'Kids' ? 'active' : ''}`} onClick={() => handleItemClick('Kids')}>
                    <Link style={{textDecoration:'none'}} to={'/kids'}>Kids</Link>
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to={'/login'}><button>Login</button></Link>
                <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
                
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar;
