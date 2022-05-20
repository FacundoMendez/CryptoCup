import React from 'react'
import "./tiketBuy.css"
import NavTikets from '../navTikets/NavTiketsBuy'
import tiketBasico from "./src/tiketBasic.png"
import tiketBoost from "./src/tiketBoost.png"
import videoParticle from "./src/particle1.mp4"


const TiketBuyPage = () => {
  return (
    <div className="containerTiketsBuy">
      <NavTikets />

      <video className='particle-Tikets' src={videoParticle} autoPlay loop muted ></video>
      
      <div className="flexTickets">

          <div className="ticketsSale">
              <div className="boxTickets">
                  <img src={tiketBasico} alt="Ticket Bassic" />

                  <div className="wrapperBotton-Tickets">
                      <div className="btnButton-Tickets">
                          <p>BUY</p>
                          <span className="BorderTopBottom-Tickets "></span>
                          <span className="BorderLeftRight-Tickets "></span>
                      </div>
                  </div>
              </div>

              <div className="boxTickets">
                  <img src={tiketBoost} alt="Ticket Ladder" />

                  <div className="wrapperBotton-Tickets">
                      <div className="btnButton-Tickets">
                          <p>BUY</p>
                          <span className="BorderTopBottom-Tickets "></span>
                          <span className="BorderLeftRight-Tickets "></span>
                      </div>
                  </div>
              </div>
          </div>

          <div className="text-tickets">
            <div className="titleTicket">
              <h2>BOOST LADDER <br />
                TOURNAMENT
              </h2>
            </div>
            <div className="textoTicket">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam tempora praesentium eius esse dignissimos minima at architecto ipsam dicta voluptas amet, odio non cumque pariatur repellat velit repellendus. Culpa, labore.
              </p>
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default TiketBuyPage