import React from 'react'
import "./referidos.css"
import backReferidos from "./src/backReferidos.jpg"
import ticketReferidos from "./src/ticketReferidos.png"
import linesBack from "./src/lines.jpg"

const Referidos = () => {
  return (
    <div className="boxContainerPin_referidos">
        <div className='containerReferidos'>
                <img className="backReferidos" src={backReferidos} alt="background referidos" />
                <div className="cortinaTop">
                  <img className='linesBackTop' src={linesBack} alt="linesBack" />
                </div>
                <div className="boxReferidos_t">
                  <div className="textsReferidos">
                      <h2>Refer To Earn</h2>
                      <p>The Referral System will allow you to earn by inviting people to be part of Crypto Cup with an exclusive discount! <br /> <br />

                      Every people who buys a ticket with your <span className='spanColor'>Referral Link</span>, not only will get a HUGE discount, they will also get you a compensation that will go directly to your wallet once they complete the pucharse transaction. <br /> <br />

                      There’s 2 ways to earn with the Referral System: <br /> 

                      If they buy the Basic Ladder Ticket, will get a <span className='spanColor'>20% Discount</span>, getting the Ticket for  <span className='spanColor'> $16 USD instead of $20 USD</span>. You will get <span className='spanColor'>$2 USDt</span> for every Basic Ladder Ticket.

                      <br /><br />
                        
                      If they buy the Boost Ladder Ticket, will get a <span className='spanColor'>20% Discount</span>, getting the Ticket for  <span className='spanColor'> $28 USD instead of $35 USD</span>. You will get <span className='spanColor'>$3 USDt</span> for every Basic Ladder Ticket.
                        
                      </p>
                  </div>
                  <img className="ticketsReferidos" src={ticketReferidos} alt="tickets referidos" />

                </div>

                <div className="cortinaBottom">
                  <img className='linesBackBottom' src={linesBack} alt="linesBack" />
                </div>
            </div>
    </div>
   
  )
}

export default Referidos