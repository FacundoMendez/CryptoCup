import React from 'react'
import "./tournament.css"
import TitlesContainers from '../TitlesContainers'

const TournamentMain = () => {
  return (
      <div className="tournamentContainer">
          <TitlesContainers title="TOURNAMENT" />

          <div className="subTitle">
            <h5>MAIN PRIZE</h5>
            <p>
              Crypto Cup is the first crypto Tournament based on the Fifa World Cup 2022 that seeks to entertain and benefit players with dollar prizes and the possibility of obtaining exclusive collectible NFT'S from their favorite world players
            </p>
          </div>
      
      </div>
  )
}

export default TournamentMain