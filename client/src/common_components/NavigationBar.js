import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <nav className="topNavigation">
        <div className="nav-image">
            <img src="web_side_image/logo.webp" alt="logo" className="nav-image-items"/>
        </div>
        <ul className="nav">
            <li className="nav-item  nav-link-animation nav-link-animation-left"><Link to="/" className="nav-link active" >HOME</Link></li>
            <li className="nav-item  nav-link-animation nav-link-animation-left">
              <Link to="/ClientMenScreen" className="nav-link" >MEN</Link>
              <ul className="nav-dropdown">
                <li className="">T-Shirt</li>
                <li className="">Jackets</li>
                <li className="">Trousers</li>
                <li className="">Shorts</li>
              </ul>
            </li>
            <li className="nav-item  nav-link-animation nav-link-animation-left">
              <Link to="/ClientWomenScreen"  className="nav-link">WOMEN</Link>
              <ul className="nav-dropdown">
                <li className="">T-Shirts & Tops</li>
                <li className="">Hoodies</li>
                <li className="">Leggings & Tights</li>
                <li className="">Skirts & Dresses</li>
              </ul>
            </li>
            <li className="nav-item  nav-link-animation nav-link-animation-left">
              <a href="/"  className="nav-link">KIDS</a>
              <ul className="nav-dropdown">
                <li className="">Shoes</li>
                <li className="">Socks</li>
                <li className="">Boys Pants</li>
                <li className="">Girls Skirts</li>
              </ul>
            </li>
        </ul>
        <div>
           <input type="text" name="search" placeholder="Search" className="nav-search-box"/>
           <span className='nav-cart-button'>CART</span>
           <a href="/" className="nav-link-user">FAVORITE</a>
           <a href="/" className="nav-link-user">JOIN</a>
        </div>
    </nav>
  )
}

export default NavigationBar