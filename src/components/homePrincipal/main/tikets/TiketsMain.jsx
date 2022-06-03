import React, {useState, useEffect} from 'react'
import "./tiket.css"
import TiketBoost from "./src/tiketBasic.png"
import TiketBasic from "./src/tiketBoost.png"
import { Navigate } from 'react-router-dom'
import tiketsScroll from './tiketsScroll'
import backReflejo from "./src/BackTickets2.jpg"

const TiketsMain = () => {

  const [tiketClick , setTiketClick] = useState(false)

  useEffect(()=>{
    tiketsScroll()
  },[])

  return (
    <>
    <div id='tickets' className="containerTikets">
        
      <img className="backgroundReflejo backTikets " src={backReflejo} alt="background" />

        <div className="textTikets">

            <div className="titleContainers tiketsTitle">
              <h2>GRIND YOUR WAY TO THE TOP OF THE LADDER</h2>
              <h3>Wanna compete? Get your ticket.</h3>
              
            </div>
            <p className='textDescripcionTikets'>
            To be available to participate, you’ll need one of our NFT tickets. You can choose between “Basic Ladder Ticket”, “Premium Ladder Ticket” or both. Each ticket allows you to play the corresponding tournament and will grant your access to the tournament as a player, so you will be able to use all the functions of the dapp!
            </p>

            <div className="titleTicket-home">
              <h2>
                BASIC LADDER 
              </h2>
            </div>
            <div className="textoTicket-home">
              <p>
              This ladder is designed for everyone who wants to compete in the simplest way, you only need your basic ticket acquired and be ready to predict the largest possible number of matches to earn points on this ladder. Each match will vary in the points given to the participants, based on the real probabilities on winning/losing of each different team and its adversary.
              </p>
            </div>

            <div className="titleTicket-home">
              <h2>
                BOOST LADDER 
              </h2>
            </div>
            <div className="textoTicket-home">
              <p>
                It's a premium ladder that grants you access to special extra functions which will bring more value to your strategy, timing, vision and overall a more interesting competition. Joining this ladder will unlock you:
                <br /><br />
                Token utility <br />
                Access to Multipliers<br />
                Bet system unlocked<br />
                Prediction Streak Rewards<br />
                <br />
                Place bets on all the matches of the world cup, access multipliers to climb faster, and all of this with our token. to increase your winnings, streak rewards, and more.

              </p>
            </div>

        </div>

        <div className="tiketImg" >
          <img className='tiketsPreview' src={TiketBoost} alt="ticket" onClick={() => setTiketClick(true)} />
          <img className='tiketsPreview' src={TiketBasic} alt="ticket" onClick={() => setTiketClick(true)} />
        </div>


        {tiketClick ? <Navigate to= "/tickets" /> : null }
    </div>
    </>
  )
}

export default TiketsMain