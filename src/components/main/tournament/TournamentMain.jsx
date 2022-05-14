import React, {useEffect} from 'react'
import "./tournament.css"
import ball from './ball'
import TitlesContainers from '../TitlesContainers'
import backgroundReflejo from "../../main/src/pp2.png"

const TournamentMain = () => {

  useEffect(()=>{
    ball()
  },[])

  return (
      <div className="tournamentContainer">
          <canvas className='cupWebGl'></canvas>  

        <img className="backgroundReflejo"src={backgroundReflejo}  alt="backReflejo" />
        <div className="boxTournament">
            <TitlesContainers title="TOURNAMENT" />

          <div className="subTitlePrize">
              <h5>MAIN PRIZE</h5>
              <p>
                Crypto Cup is the first crypto Tournament based on the Fifa World Cup 2022 that seeks to entertain and benefit players with dollar prizes and the possibility of obtaining exclusive collectible NFT'S from their favorite world players
              </p>

                  
              <div className="subTitleNft">
                  <h5>NFT'S</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, vitae veritatis quos eaque blanditiis in atque! Suscipit, assumenda, ducimus at iure, laudantium aut beatae esse molli
                  </p>
              </div>

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