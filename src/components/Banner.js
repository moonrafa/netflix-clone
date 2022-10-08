import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
          "https://mir-s3-cdn-cf.behance.net/project_modules/fs/8a6a68144592045.628efcd3e77b5.jpg"
        )`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
    ></header>
  )
}

export default Banner
