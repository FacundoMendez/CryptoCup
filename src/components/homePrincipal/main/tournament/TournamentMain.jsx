import React, {useEffect} from 'react'
import "./tournament.css"
import backgroundReflejo from "./src/BackTournament.jpg"
import tournamentScroll from './tournamentScroll'

const TournamentMain = () => {

  useEffect(() =>{
    tournamentScroll()
  },[])

  return (
      <div id='tournament' className="tournamentContainer">
        <img className="backgroundReflejo"src={backgroundReflejo}  alt="backReflejo" />
        
        <div className="boxTournament">

            <div className="containerTexts">

              <div className="titleContainers tournamentTitle">
                <h2>CHOOSE RIGHT, BE THE BEST</h2>
              </div>

              <div className="subTitlePrize">
                <p>
                  Crypto Cup is the first crypto tournament based on predictions of the Fifa World Cup 2022.
                  With its exponential growth possibilities, you'll be allowed to join a low-cost opportunity to win a big pool prize,unique NFTs and more!
                </p>
                <p>
                  Prove your soccer insights competing with your friends and the world, cheer for your favorite team and win it all.
                </p>
              </div>

                <div className="subTitleNft">
                    <h5>NFT'S</h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, vitae veritatis quos eaque blanditiis in atque! Suscipit, assumenda, ducimus at iure, laudantium aut beatae esse molli
                    </p>
                </div>
            </div>

{/*             <div className="tiposTorneos">
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
              </div> */}

            <div className="tiposTorneos">   
              <div className="flip">
                  <div className="front" >
                    <h1 className="text-shadow">TORUNAMENT 1</h1>
                  </div>
                  <div className="back">
                    <h2>TORUNAMENT 1</h2>
                    <p>Descripcion torneo 1</p>
                  </div>
              </div>

              <div className="flip">
                  <div className="front" >
                    <h1 className="text-shadow">TORUNAMENT 2</h1>
                  </div>
                  <div className="back">
                    <h2>TORUNAMENT 2</h2>
                    <p>Descripcion torneo 2</p>
                  </div>
              </div>

              <div className="flip">
                  <div className="front" >
                    <h1 className="text-shadow">TORUNAMENT 3</h1>
                  </div>
                  <div className="back">
                    <h2>TORUNAMENT 3</h2>
                    <p>Descripcion torneo 3</p>
                  </div>
              </div>

              <div className="flip">
                  <div className="front" >
                    <h1 className="text-shadow">TORUNAMENT 4</h1>
                  </div>
                  <div className="back">
                    <h2>TORUNAMENT 4</h2>
                    <p>Descripcion torneo 4</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default TournamentMain