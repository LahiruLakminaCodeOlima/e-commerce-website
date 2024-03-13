import React from 'react'

function SideNavigationBar() {
  return (
    <nav className="side-nav-bar">
        <div className="side-nav-item-box">
            <ul className="side-nav">
                <li className="side-nav-item"><button className="side-nav-btn-filter">T-Shirt</button></li>
                <li className="side-nav-item"><button className="side-nav-btn-filter">Jackets</button></li>
                <li className="side-nav-item"><button className="side-nav-btn-filter">Trousers</button></li>
                <li className="side-nav-item"><button className="side-nav-btn-filter">Shorts</button></li>
            </ul>
        </div>
    </nav>
  )
}

export default SideNavigationBar