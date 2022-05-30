import React, {useState, useEffect, lazy, Suspense} from 'react'
import "./tiketBuy.css"
import tiketBasico from "./src/tiketBasic.png"
import tiketBoost from "./src/tiketBoost.png"
import videoParticle from "./src/particle1P.mp4"
import Social from "../../homePrincipal/header/home/social/Social"
import checkToken from './checkToken'
import Spinner from '../../spinner/Spinner'

import busdLogo from "./src/busdLogo.png"
import daiLogo from "./src/daiLogo.png"
import usdcLogo from "./src/usdcLogo.png"
import usdtLogo from "./src/usdtLogo.png"

const NavTikets = lazy(() => import ('../navTikets/NavTiketsBuy'))


const TiketBuyPage = () => {

  const [active, setActive ] = useState(1)

  useEffect(() => {
    checkToken()
  })

  return (
    <div className="containerTiketsBuy">
      <Suspense fallback={<Spinner/>}>
        <NavTikets />
      </Suspense>

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

            <div className="wrapperBotton-ticketSale ">
              <div className="btn-ticketSale" >
                <p className='select'>Selec Token</p>
                
                <div className="radioToken">

                  <label className="radio control-radio">
                    <img className='LogoToken' src={usdcLogo} alt="Logo Dai" />
                    <p>USDC</p>
                      <input type="radio" value="option1" readOnly={true} name="radio" checked={active === 1} onClick={() => setActive(1)}/>
                      <div className="control_indicator"></div>
                  </label>

                  <label className="radio control-radio">
                      <img className='LogoToken' src={usdtLogo} alt="Logo Dai" />
                      <p>USDT</p>
                      <input type="radio" value="option2" readOnly={true} name="radio" checked={active === 2} onClick={() => setActive(2)}  />
                      <div className="control_indicator"></div>
                  </label>
                  
                  <label className="radio control-radio">
                      <img className='LogoToken' src={busdLogo} alt="Logo Dai" />
                      <p>BUSD</p>
                      <input type="radio" value="option3" readOnly={true} name="radio" checked={active === 3} onClick={() => setActive(3)} />
                      <div className="control_indicator"></div>
                  </label>
                  
                  <label className="radio control-radio">
                      <img className='LogoToken' src={daiLogo} alt="Logo Dai" />
                      <p>DAI</p>
                      <input type="radio" value="option4" readOnly={true} name="radio" checked={active === 4} onClick={() => setActive(4)} />
                      <div className="control_indicator"></div>
                  </label>

              </div>
                <span className="BorderTopBottom-ticketSale  "></span>
                <span className="BorderLeftRight-ticketSale  "></span>
              </div>
            </div>
          </div>
      </div>
      <Social />
    </div>
  )
}

export default TiketBuyPage