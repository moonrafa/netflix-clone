import React, { useState } from 'react'
import './Login.css'
import SignIn from './SignIn'

function Login() {
  const [signIn, setSignIn] = useState(false)
  return (
    <div className="login">
      <div className="login__bg">
        <img
          onClick={() => setSignIn(false)}
          className="login__logo"
          src="
https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
        />
        {!signIn && (
          <button onClick={() => setSignIn(true)} className="login__button">
            Sign In
          </button>
        )}
        <div className="login__gradient"></div>
      </div>
      <div className="login__body">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="login__input">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  className="login__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  Get Started &gt;
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Login
