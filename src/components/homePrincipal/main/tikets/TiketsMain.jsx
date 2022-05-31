import React, {useState, useEffect} from 'react'
import "./tiket.css"
import TiketBoost from "./src/tiketBasic.png"
import TiketBasic from "./src/tiketBoost.png"
import { Navigate } from 'react-router-dom'
import tiketsScroll from './tiketsScroll'
import backReflejo from "./src/BackTickets.jpg"

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
              <h2>TICKETS</h2>
            </div>
            <p className='textDescripcionTikets'>
              By buying a ticket you access the tournament as a player, and you will be able to use all the functions of the dapp and place bets on all the matches of the world cup!
            </p>

            <div className="titleTicket-home">
              <h2>
                BASIC LADDER 
              </h2>
            </div>
            <div className="textoTicket-home">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam tempora praesentium eius esse dignissimos minima at architecto ipsam dicta voluptas amet, odio non cumque pariatur repellat velit repellendus. Culpa, labore.
              </p>
            </div>

            <div className="titleTicket-home">
              <h2>
                BOOST LADDER 
              </h2>
            </div>
            <div className="textoTicket-home">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam tempora praesentium eius esse dignissimos minima at architecto ipsam dicta voluptas amet, odio non cumque pariatur repellat velit repellendus. Culpa, labore.
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