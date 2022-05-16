import React, {useState, useEffect} from 'react'
import "./tiket.css"
/* import TitlesContainers from '../TitlesContainers' */
import TiketBoost from "./src/tiketBasic.png"
import TiketBasic from "./src/tiketBoost.png"
import MaradonaPng from "./src/maradona.png"
import qatarPng from "./src/qatar.png"
import { Navigate } from 'react-router-dom'
import tiketsScroll from './tiketsScroll'

const TiketsMain = () => {

  const [tiketClick , setTiketClick] = useState(false)

  useEffect(()=>{
    tiketsScroll()
  },[])

  return (
    <>
    <div className="containerTikets">
        <img className='maradonaPng' src={MaradonaPng} alt="maradooo" />
        <img className='qatarPng' src={qatarPng} alt="qatar" />
        
        <div className="textTikets">

          <div className="titleContainers tiketsTitle">
            <h2>TIKETS</h2>
          </div>

            <p className='textDescripcionTikets'>By buying a ticket you acces the Tournamet as a player, and you will be able to use all the functions of the Dapp and place bets on all the matches of the World Cup</p>
        </div>

        <div className="tiketImg" >
          <img className='tiketsPreview' src={TiketBoost} alt="tiket" onClick={() => setTiketClick(true)} />
          <img className='tiketsPreview' src={TiketBasic} alt="tiket" onClick={() => setTiketClick(true)} />
        </div>

        <canvas className='cupWebGl'></canvas>  

        {tiketClick ? <Navigate to= "/tikets" /> : null }
    </div>
    </>
  )
}

export default TiketsMain