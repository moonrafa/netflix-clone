import React from 'react'
import './SignIn.css'

function SignIn() {
  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
        <h4>
          New to Netflix? <a href="/">Sign up now.</a>
        </h4>
      </form>
    </div>
  )
}

export default SignIn
