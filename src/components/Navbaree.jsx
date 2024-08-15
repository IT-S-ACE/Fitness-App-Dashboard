import React, {useState} from 'react';
import logo from "../assets/logo.png";
import {Link} from 'react-scroll';

function Navbaree() {

    const[nav,setnav] = useState(false);

    const changeBacground = () => {
        if (window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBacground);

return (
    <nav className={nav ? "nav active": "nav"}>
        <Link to='#' className='logo'>
            <img src={logo} alt='' />
        </Link>
        <input type="checkbox" className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' htmlFor="menu-btn">
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='#'>Header</Link></li>
            <li><Link to='#'>FREATURES</Link></li>
            <li><Link to='#'>OFFER</Link></li>
            <li><Link to='#'>ABOUT</Link></li>
            <li><Link to='#'>CONTACT</Link></li>
        </ul>
    </nav>
)
}

export default Navbaree;
