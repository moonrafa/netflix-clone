import React, { useRef } from 'react'
import './SignIn.css'
import { auth } from '../../firebase'

function SignIn() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = e => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser)
      })
      .catch(error => {
        alert(error.message)
      })
  }
  const signIn = e => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser)
      })
      .catch(error => {
        alert(error.message)
      })
  }
  return (
    <div className="signIn">
      <form autoComplete="on">
        <h1>Sign In</h1>
        <input ref={emailRef} required type="email" placeholder="Email" />
        <input
          ref={passwordRef}
          required
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          New to Netflix?{' '}
          <a onClick={register} href="/">
            Sign up now.
          </a>
        </h4>
      </form>
    </div>
  )
}

export default SignIn
