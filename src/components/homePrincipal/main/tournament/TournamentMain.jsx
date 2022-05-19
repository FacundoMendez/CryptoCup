import React, {useEffect} from 'react'
import "./tournament.css"
import backgroundReflejo from "../../main/src/pp2.png"
import copaPng from "./src/copaPng.png"
import tournamentScroll from './tournamentScroll'

const TournamentMain = () => {

  useEffect(() =>{
    tournamentScroll()
  },[])

  return (
      <div id='tournament' className="tournamentContainer">
        <img className='copaPng' src={copaPng} alt="copaMundo" />
        <img className="backgroundReflejo"src={backgroundReflejo}  alt="backReflejo" />
        
        <div className="boxTournament">

            <div className="containerTexts">

              <div className="titleContainers tournamentTitle">
                <h2>TOURNAMENT</h2>
              </div>

              <div className="subTitlePrize">
                <h5>MAIN PRIZE</h5>
                <p>
                  Crypto Cup is the first crypto Tournament based on the Fifa World Cup 2022 that seeks to entertain and benefit players with dollar prizes and the possibility of obtaining exclusive collectible NFT'S from their favorite world players
                </p>
              </div>

                <div className="subTitleNft">
                    <h5>NFT'S</h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, vitae veritatis quos eaque blanditiis in atque! Suscipit, assumenda, ducimus at iure, laudantium aut beatae esse molli
                    </p>
                </div>
            </div>

            <div className="tiposTorneos">
                  <div className="card tournament1 card__side--front card__side--front-1">
                    <h3 className="title">TOURNAMENT 1</h3>
                  </div>
                  <div className="card tournament2 card__side--front card__side--front-2">
                    <h3 className="title">TOURNAMENT 2</h3>
                  </div>
                  <div className="card tournament3 card__side--front card__side--front-3">
                    <h3 className="title">TOURNAMENT 3</h3>
                  </div>
                  <div className="card tournament4 card__side--front card__side--front-4">
                    <h3 className="title">TOURNAMENT 4</h3>
                  </div>
              </div>
            </div>
        </div>
  )
}

export default TournamentMain