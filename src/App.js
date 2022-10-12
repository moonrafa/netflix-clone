import React from 'react'
import './App.css'
import Homescreen from './components/screens/Homescreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/screens/Login'
import Profile from './components/screens/Profile'
function App() {
  const user = null
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<Homescreen />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        )}
      </Router>
    </div>
  )
}

export default App
