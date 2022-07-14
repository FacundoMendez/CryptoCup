import React from 'react'
import "./referidos.css"
import backReferidos from "./src/ref4.jpg"
import linesBack from "./src/lines.jpg"

const Referidos = () => {
  return (
    <div className='containerReferidos'>
        <img className="backReferidos" src={backReferidos} alt="background referidos" />
        <div className="cortinaTop">
          <img className='linesBackTop' src={linesBack} alt="linesBack" />
        </div>
        <div className="textsReferidos">
            <h2>refer to earn</h2>
            <p>The referral system allowed you to bring people and get a huge discount and the oportunity to get big rewards <br /> <br /> <span> For every people who bougth a ticket with your referral code, <br /> you get <span className='spanColor'>$1 USDT</span> , and they get a discount of <span className='spanColor'>$4 USDT</span></span></p>
        </div>
        <div className="cortinaBottom">
          <img className='linesBackBottom' src={linesBack} alt="linesBack" />
        </div>
    </div>
  )
}

export default Referidos