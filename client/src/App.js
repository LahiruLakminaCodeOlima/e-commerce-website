import React from 'react'
import { Routes, Route} from 'react-router-dom'
import ClientHomeScreen from './client_screen/ClientHomeScreen'
import ClientMenScreen from './client_screen/ClientMenScreen'
import ClientWomenScreen from './client_screen/ClientWomenScreen'

function App() {
  return (
    <div style={{backgroundColor:"#cccccc"}}>
      <Routes>
        <Route path="/" element={<ClientHomeScreen/>}/>
        <Route path="/ClientMenScreen" element={<ClientMenScreen/>}/>
        <Route path="/ClientWomenScreen" element={<ClientWomenScreen/>}/>
      </Routes>
    </div>
  )
}

export default App