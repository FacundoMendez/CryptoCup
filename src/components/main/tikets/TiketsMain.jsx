import React, {useEffect} from 'react'
import "./tiket.css"
import tiketFuncional from './tiketFuncional'
import TitlesContainers from '../TitlesContainers'
import TiketBoost from "./src/tiketBasic.png"
import TiketBasic from "./src/tiketBoost.png"
import MaradonaPng from "./src/maradona.png"
import qatarPng from "./src/qatar.png"

const TiketsMain = () => {

    useEffect(() => {
        tiketFuncional()
    },[])

  return (
    <div className="containerTikets">
        <img className='maradonaPng' src={MaradonaPng} alt="maradooo" />
        <img className='qatarPng' src={qatarPng} alt="qatar" />
        
        <div className="textTikets">
            <TitlesContainers title="TIKETS" />
            <p>By buying a ticket you acces the Tournamet as a player, and you will be able to use all the functions of the Dapp and place bets on all the matches of the World Cup</p>
        </div>

        <div className="tiketImg">
          <img className='tiketsPreview' src={TiketBoost} alt="tiket" />
          <img className='tiketsPreview' src={TiketBasic} alt="tiket" />
        </div>

        <canvas className='cupWebGl'></canvas>  

    </div>
  )
}

export default TiketsMain