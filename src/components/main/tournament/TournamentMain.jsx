import React from 'react'
import "./tournament.css"
import TitlesContainers from '../TitlesContainers'
import backgroundReflejo from "../../main/src/pp2.png"

const TournamentMain = () => {
  return (
      <div className="tournamentContainer">
        <img className="backgroundReflejo"src={backgroundReflejo}  alt="backReflejo" />
        <div className="boxTournament">
            <TitlesContainers title="TOURNAMENT" />

          <div className="subTitle">
            <h5>MAIN PRIZE</h5>
            <p>
              Crypto Cup is the first crypto Tournament based on the Fifa World Cup 2022 that seeks to entertain and benefit players with dollar prizes and the possibility of obtaining exclusive collectible NFT'S from their favorite world players
            </p>

            <div className="tiposTorneos">

              <div className="card tournament1">
                <h3 className="title">TOURNAMENT 1</h3>
              </div>

              <div className="card tournament2">
                <h3 className="title">TOURNAMENT 2</h3>
              </div>

              <div className="card tournament3">
                <h3 className="title">TOURNAMENT 3</h3>
              </div>

              <div className="card tournament4">
                <h3 className="title">TOURNAMENT 4</h3>
              </div>

            </div>
          </div>
        </div>
      
      
      </div>
  )
}

export default TournamentMain