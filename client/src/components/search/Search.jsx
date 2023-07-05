import React from 'react'
import {UilSearch} from '@iconscout/react-unicons'
import './Search.css'

const Search = () => {
  return (
    <div className='LogoSearch'>
      <i class="fa-brands fa-twitter s-icon"></i>
      <div className="Search">
        <input type="text" placeholder='Explore' />
        <div className="s-icon">
            <UilSearch/>
        </div>
      </div>
    </div>
  )
}

export default Search
