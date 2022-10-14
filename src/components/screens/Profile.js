import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import Nav from '../Nav'
import './Profile.css'
import SubscriptionPlan from './SubscriptionPlan'

function Profile() {
  const user = useSelector(selectUser)
  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar"
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plan">
              <h3>Plans </h3>
              <SubscriptionPlan />
            </div>
            <button onClick={() => auth.signOut()}> Sign Out </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
