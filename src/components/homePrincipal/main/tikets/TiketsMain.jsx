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
              <h2>TOURNAMENT TICKETS</h2>
            </div>
            <p className='textDescripcionTikets'>
              By buying a ticket you grant your access to the tournament as a player, and you will be able to use all the functions of the dapp!
            </p>

            <div className="titleTicket-home">
              <h2>
                BASIC LADDER 
              </h2>
            </div>
            <div className="textoTicket-home">
              <p>
              “Basic ladder” is the representation of a simple tournament, in which you only have to have your ticket and your knowledge to predict the largest possible number of matches and thus lead the top of the ladder.
              </p>
            </div>

            <div className="titleTicket-home">
              <h2>
                BOOST LADDER 
              </h2>
            </div>
            <div className="textoTicket-home">
              <p>
                Purchase multipliers to climb faster, match bets to increase your winnings, streak rewards, and more. Talking about this is just the beginning
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