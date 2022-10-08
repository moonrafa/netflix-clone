import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false)

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
          className="nav__logo"
          src="
https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Profile"
        />
      </div>
    </div>
  )
}

export default Nav
