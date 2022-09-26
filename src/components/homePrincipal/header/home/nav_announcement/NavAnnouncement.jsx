import React from 'react'
import "./navAnnouncement.css"
import { FormattedMessage } from 'react-intl'

const NavAnnouncement = () => {
  return (
    <div className="nav_announcement">
        <p className='announcement'>
            <FormattedMessage
                id="nav_announcement"
                defaultMessage="Play the friendly matchs and gain big rewards!  September 27, Play entering the Dapp!" 
            />
        </p>
    </div>
  )
}

export default NavAnnouncement