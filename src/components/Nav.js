import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false)
  const navigate = useNavigate()
  const transtionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transtionNavBar)

    //cleanup
    return () => window.removeEventListener('scroll', transtionNavBar)
  }, [])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate('/')}
          className="nav__logo"
          src="
https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
        />
        <img
          onClick={() => navigate('/profile')}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Profile"
        />
      </div>
    </div>
  )
}

export default Nav
