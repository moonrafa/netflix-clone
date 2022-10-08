import './Homescreen.css'
import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'

function Homescreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      {/*
        <Row /> */}
    </div>
  )
}

export default Homescreen
