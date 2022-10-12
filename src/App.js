import React, { useEffect } from 'react'
import './App.css'
import Homescreen from './components/screens/Homescreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/screens/Login'
import Profile from './components/screens/Profile'
import { auth } from './firebase'
function App() {
  const user = null

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
      } else {
      }
    })

    return unsubscribe
  }, [])

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
