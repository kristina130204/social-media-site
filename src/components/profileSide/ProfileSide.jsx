import React from 'react'
import Search from '../search/Search'
import ProfileCard from '../profileCard/ProfileCard'
import './ProfileSide.css'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <Search/>
      <ProfileCard/>
    </div>
  )
}

export default ProfileSide
