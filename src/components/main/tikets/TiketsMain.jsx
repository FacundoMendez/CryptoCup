import React, {useEffect} from 'react'
import "./tiket.css"
import tiketFuncional from './tiketFuncional'
import TitlesContainers from '../TitlesContainers'

const TiketsMain = () => {

    useEffect(() => {
        tiketFuncional()
    },[])

  return (
    <div className="containerTikets">
        <div className="textTikets">
            <TitlesContainers title="TIKETS" />
            <p>By buying a ticket you acces the Tournamet as a player, and you will be able to use all the functions of the Dapp and place bets on all the matches of the World Cup</p>
        </div>
    </div>
  )
}

export default TiketsMain