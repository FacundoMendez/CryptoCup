import React, {lazy, Suspense} from 'react'
import "./tiketBuy.css"
import tiketBasico from "./src/tiketBasic.png"
import tiketBoost from "./src/tiketBoost.png"
import videoParticle from "./src/particle1P.mp4"
import Social from "../../homePrincipal/header/home/social/Social"
import Spinner from '../../spinner/Spinner'
import SelectTokenBasic from './tokensSelect/tokenBasic/SelectTokenBasic'
import SelectTokenBoost from './tokensSelect/tokenBoost/SelectTokenBoost'


const NavTikets = lazy(() => import ('../navTikets/NavTiketsBuy'))


const TiketBuyPage = () => {

  return (
    <div className="containerTiketsBuy">
      <Suspense fallback={<Spinner/>}>
        <NavTikets />
      </Suspense>

      <video className='particle-Tikets' src={videoParticle} autoPlay loop muted ></video>
      
      <div className="flexTickets">

          <div className="ticketsSale">

              <div className="boxTickets">
                  <img className='ImgTicket' src={tiketBasico} alt="Ticket Bassic" />
                  
                  <div className="wrapperBotton-Tickets">
                      <div className="btnButton-Tickets">
                          <p>BUY</p>
                          <span className="BorderTopBottom-Tickets "></span>
                          <span className="BorderLeftRight-Tickets "></span>
                      </div>
                      <SelectTokenBasic />
                  </div>
              </div>

              <div className="boxTickets">
                  <img className='ImgTicket ImgTicket-boost' src={tiketBoost} alt="Ticket Ladder" />

                  <div className="wrapperBotton-Tickets">
                      <div className="btnButton-Tickets">
                          <p>BUY</p>
                          <span className="BorderTopBottom-Tickets "></span>
                          <span className="BorderLeftRight-Tickets "></span>
                      </div>
                    <SelectTokenBoost />
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
      <Social />
    </div>
  )
}

export default TiketBuyPage