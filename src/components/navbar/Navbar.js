import React, { useRef, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Burger from './menu.png';

export const Navbar = () => {
  const menuBurger = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const onClickMenu = () => {
    if (!isOpen)
      return (menuBurger.current.style.display = 'flex'), setIsOpen(!isOpen);

    if (isOpen)
      return (menuBurger.current.style.display = 'none'), setIsOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <h1>Coupons</h1>
        <img src={Burger} alt='Menu-burger' onClick={onClickMenu} />
        <div className='menu-desktop'>
          <ul>
            <li>
              <Link to='/'>Thanksgiving</Link>
            </li>
            <li>
              <Link to='/'>Browse</Link>
            </li>
            <li>
              <Link to='/'>Submit</Link>
            </li>
            <li>
              <Link to='/'>Ressources</Link>
            </li>
            <li>
              <Link to='/'>Log in</Link>
            </li>
            <li>
              <Link to='/'>Join Up</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div ref={menuBurger} className='menu-burger'>
        <ul>
          <li>
            <Link to='/'>Thanksgiving</Link>
          </li>
          <li>
            <Link to='/'>Browse</Link>
          </li>
          <li>
            <Link to='/'>Submit</Link>
          </li>
          <li>
            <Link to='/'>Ressources</Link>
          </li>
          <li>
            <Link to='/'>Log in</Link>
          </li>
          <li>
            <Link to='/'>Join Up</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
