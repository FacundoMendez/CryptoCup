import React, {useState, useEffect} from 'react'
import "./tiket.css"
import { Navigate } from 'react-router-dom'
import tiketsScroll from './tiketsScroll'
/* import star from "./src/star.png"
import division from "./src/division.png"
import ballCC from "./src/logoPng.png" */
/* import backReflejo from "./src/BackgroundTickets1.jpg"
import backReflejoMovile from "./src/NuevoBackgroundTickets.jpg" */
/* import TiketBoost from "./src/tiketBasic.png"
import TiketBasic from "./src/tiketBoost.png" */


const TiketsMain = () => {

  const [tiketClick , setTiketClick] = useState(false)

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  useEffect(()=>{
    tiketsScroll()
  },[])

  return (
    <>
    <div id='tickets' className="containerTikets">
        
      {!isMobile() ? <img className="backgroundReflejo backTikets " src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660656671/CryptocupQatar/tickets/BackgroundTickets1_dmwwf7.jpg"/* {backReflejo} */ alt="background" /> : <img className="backgroundReflejoMovile backTiketsMovile " src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660656671/CryptocupQatar/tickets/NuevoBackgroundTickets_ff5dqp.jpg"/* {backReflejoMovile} */ alt="backgroundMovileTickets" />}
      

        <div className="textTikets">
            <div className="titleContainers tiketsTitle">
              <h2>GRIND YOUR WAY TO THE TOP OF THE LADDER</h2>
              <h3> Want to compete? Get your ticket!</h3>
            </div>
            <p className='textDescripcionTikets'>
              To be available to participate, you’ll need one of our NFT tickets. You can choose between “Basic Ladder Ticket”, “Premium Ladder Ticket” or both. Each ticket allows you to play the corresponding tournament and will grant your access to the tournament as a player, so you will be able to use all the functions of the dapp!
            </p>
        </div>
        <div className="boxTickets-Home-basic">
          <div className="titleTicket-home-basic">
            <h2>
              BASIC LADDER 
            </h2>
            <div className="textoTicket-home">
              <p>
                This ladder is designed for everyone who wants to compete in the simplest way, you only need your basic ticket acquired and be ready to predict the largest possible number of matches to earn points on this ladder. <br /> <br /> Each match will vary in the points given to the participants, based on the real probabilities on winning/losing of each different team and its adversary.
              </p>
            </div>
          </div>
          <div className="tiketImg-basic" >
            <img className='tiketsPreview' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660656671/CryptocupQatar/tickets/tiketBoost_rbpfe9.png"/* {TiketBoost} */ alt="ticket" onClick={() => setTiketClick(true)} />
          </div>
        </div>

        <div className="boxTickets-Home-boost">
            <div className="tiketImg-boost" >
                <img className='tiketsPreview' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660656671/CryptocupQatar/tickets/tiketBasic_ymmkrm.png"/* {TiketBasic} */ alt="ticket" onClick={() => setTiketClick(true)} />
            </div>
            <div className="titleTicket-home-boost">
              <h2>
                BOOST LADDER 
              </h2>
              <div className="textoTicket-home">
                <p>
                It's a premium ladder that grants you access to special extra functions which will bring more value to your strategy, timing, vision and overall a more interesting competition. Joining this ladder will unlock you:
                </p>
                <ul>
                  <li><img src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660656670/CryptocupQatar/tickets/star_ks5gr9.png"/* {star} */ alt="stars1" /> Token utility</li>
                  <li><img src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660656670/CryptocupQatar/tickets/star_ks5gr9.png"/* {star} */ alt="stars2" />  Access to Multipliers</li>
                  <li><img src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660656670/CryptocupQatar/tickets/star_ks5gr9.png"/* {star} */ alt="stars3" />  Bet system unlocked</li>
                  <li><img src="https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660656670/CryptocupQatar/tickets/star_ks5gr9.png" /* {star} */ alt="stars4" />  Prediction Streak Rewards</li>
                </ul>
                <p>
                  Place bets on all the matches of the world cup, access multipliers to climb faster, and all of this with our token. to increase your winnings, streak rewards, and more.
                </p>

              </div>
          </div>

          <div className="division">
            <img className='divisionImg' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660656670/CryptocupQatar/tickets/division_ry26ic.png"/* {division} */ alt="Division container" />
          </div>
        </div>

       {tiketClick ? <Navigate to= "/tickets" /> : null } 
      
      <div className="cesped"></div>
      <img className="pelota" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660656670/CryptocupQatar/tickets/logoPng_ehylkn.png"  /* {ballCC} */ alt="pelota " />

      </div>
    </>
  )
}

export default TiketsMain