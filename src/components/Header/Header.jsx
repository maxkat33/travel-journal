import React from 'react'
import GlobeIcon from './GlobeIcon'

const Header = () => {
  return (
    <header>
      <div className='globe-icon'>
          <GlobeIcon />
      </div>
      <h3 className='header--title'>my travel journal.</h3>
    </header>
  )
}

export default Header