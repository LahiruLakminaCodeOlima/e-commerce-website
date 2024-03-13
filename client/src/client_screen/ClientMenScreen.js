import React from 'react'
import NavigationBar from '../common_components/NavigationBar'
import SideNavigationBar from '../common_components/SideNavigationBar'

function ClientMenScreen() {
  return (
    <div>
        <header>
            <SideNavigationBar/>
            <NavigationBar/>
        </header>
        <main className="men-main-container">
            <div className="men-side-nav-space">

            </div>
            <div className="men-use-space">
                <h1>T-Shirt</h1>
            </div>
        </main>
    </div>
  )
}

export default ClientMenScreen