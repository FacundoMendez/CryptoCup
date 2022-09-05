import React from 'react'
import "./button.css"
import {FormattedMessage} from 'react-intl';

const Button = ({title}) => {
  return (
    <div className="wrapperBotton">
        <div className="btn">
          <p>
            <FormattedMessage
              id="home-buyTickets"
              defaultMessage={title}
            />
            </p>
          <span className="BorderTopBottom "></span>
          <span className="BorderLeftRight "></span>
        </div>
    </div>
  )
}

export default Button