import React from 'react'
import "./navAnnouncement.css"
import { FormattedMessage } from 'react-intl'

const NavAnnouncement = () => {
  return (
    <div className="nav_announcement">
        <p className='announcement'>
            <FormattedMessage
                id="nav_announcement"
                defaultMessage="Win BIG Rewards by testing our Dapp with the International Friendly Matches of the September 27!" 
            />
        </p>
    </div>
  )
}

export default NavAnnouncement