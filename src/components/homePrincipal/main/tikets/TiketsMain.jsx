import React, {useState, useEffect} from 'react'
import "./tiket.css"
import { Navigate } from 'react-router-dom'
import tiketsScroll from './tiketsScroll'



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
        
      {!isMobile() ? <img className="backgroundReflejo backTikets " src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:eco/v1660656671/CryptocupQatar/tickets/BackgroundTickets1_dmwwf7.jpg"/* {backReflejo} */ alt="background" /> : 
      <img className="backgroundReflejoMovile backTiketsMovile " src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:eco/v1660656671/CryptocupQatar/tickets/NuevoBackgroundTickets_ff5dqp.jpg"/* {backReflejoMovile} */ alt="backgroundMovileTickets" />}
      

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
          <div className="tiketImg-basic" >
            <img className='tiketsPreview' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:eco/v1660656671/CryptocupQatar/tickets/tiketBasic_ymmkrm.png" alt="ticket" onClick={() => setTiketClick(true)} />
          </div>
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
       
        </div>

        <div className="boxTickets-Home-boost">
           
            <div className="titleTicket-home-boost">
              <h2>
                BOOST LADDER 
              </h2>
              <div className="textoTicket-home">
                <p className='text_boost_top'>
                It's a premium ladder that grants you access to special extra functions which will bring more value to your strategy, timing, vision and overall a more interesting competition. Joining this ladder will unlock you:
                </p>
                <ul>
                  <li className='star1'><img  src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:eco/v1661557746/CryptocupQatar/tickets/star3d_prqb1b.png"/* {star} */ alt="stars1" /> Token utility</li>
                  <li className='star2'><img  src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:eco/v1661557746/CryptocupQatar/tickets/star3d_prqb1b.png"/* {star} */ alt="stars2" />  Access to Multipliers</li>
                  <li className='star3'><img  src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:eco/v1661557746/CryptocupQatar/tickets/star3d_prqb1b.png"/* {star} */ alt="stars3" />  Advanced Predictions unlocked</li>
                  <li className='star4'><img  src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:eco/v1661557746/CryptocupQatar/tickets/star3d_prqb1b.png" /* {star} */ alt="stars4" />  Prediction Streak Rewards</li>
                </ul>
                <p className='text_boost_bottom'>
                  Test your skills on all matches of the world cup, access multipliers to climb faster, increase your rewards with our token, access winning streaks and more.
                </p>

              </div>
        
          </div>
          <div className="tiketImg-boost" >
                <img className='tiketsPreview' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:eco/v1660656671/CryptocupQatar/tickets/tiketBoost_rbpfe9.png" alt="ticket" onClick={() => setTiketClick(true)} />
            </div>
         
        </div>
        <div className="division">
            <img className='divisionImg' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:low/v1660656670/CryptocupQatar/tickets/division_ry26ic.png"/* {division} */ alt="Division container" />
          </div>
       {tiketClick ? <Navigate to= "/tickets" /> : null } 
      

      </div>
    </>
  )
}

export default TiketsMain