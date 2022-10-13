import React, { useEffect } from 'react'
import './App.css'
import Homescreen from './components/screens/Homescreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/screens/Login'
import Profile from './components/screens/Profile'
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        )
      } else {
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])

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
