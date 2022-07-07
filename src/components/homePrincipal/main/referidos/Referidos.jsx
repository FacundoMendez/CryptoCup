import React from 'react'
import "./referidos.css"
import backReferidos from "./src/ref4.jpg"

const Referidos = () => {
  return (
    <div className='containerReferidos'>
        <img className="backReferidos" src={backReferidos} alt="background referidos" />
        <div className="cortinaTop"></div>
        <div className="textsReferidos">
            <p>The referral system allowed you to bring people and get a huge discount and the oportunity to you to get big rewards <br /> <br /> <span> (For every people who bougth a ticket with your referral code, you get 1$ USDT, and they get a discount of 4$ USDT) </span></p>
        </div>
        <div className="cortinaBottom"></div>
    </div>
  )
}

export default Referidos