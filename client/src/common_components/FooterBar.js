import React from 'react'

function FooterBar() {
  return (
    <div className="footer-bar">
        <div className="footer-bar-boxes">
            <h4>CATEGORY</h4>
            <ul className="footer-bar-boxes-list">
                <li><a href="/" className="footer-bar-boxes-list-link">Men</a></li>
                <li><a href="/" className="footer-bar-boxes-list-link">Women</a></li>
                <li><a href="/" className="footer-bar-boxes-list-link">Kids</a></li>
            </ul>
        </div>
        <div className="footer-bar-boxes">
            <h4>COMPANY INFO</h4>
            <ul className="footer-bar-boxes-list">
                <li><a href="/"className="footer-bar-boxes-list-link">About</a></li>
                <li><a href="/"className="footer-bar-boxes-list-link">Careers</a></li>
            </ul>
        </div>
        <div className="footer-bar-boxes">
            <h4>FOLLOW US</h4>
            <ul className="footer-bar-boxes-list">
                <li><a href="/" className="footer-bar-boxes-list-link">Facebook</a></li>
                <li><a href="/" className="footer-bar-boxes-list-link">Instagram</a></li>
                <li><a href="/" className="footer-bar-boxes-list-link">Twitter</a></li>
                <li><a href="/"className="footer-bar-boxes-list-link">YouTube</a></li>
            </ul>
        </div>
    </div>
  )
}

export default FooterBar