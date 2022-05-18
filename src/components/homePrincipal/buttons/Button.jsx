import React from 'react'
import "./button.css"

const Button = ({title}) => {
  return (
    <div className="wrapperBotton">
        <div className="btn">
          <p>{title}</p>
          <span className="BorderTopBottom "></span>
          <span className="BorderLeftRight "></span>
        </div>
    </div>
  )
}

export default Button