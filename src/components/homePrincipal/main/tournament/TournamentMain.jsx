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
                <h2>Grind your way to the top of the ladder</h2>
              </div>

              <div className="subTitlePrize">
                <p>
                Crypto Cup is the first crypto tournament based on predictions of the Fifa World Cup 2022.
                With its exponential growth possibilities, you'll be allowed to join a low-cost opportunity to win a big pool prize, unique NFTs and more! Prove your soccer insights competing with your friends and the world, cheer for your favorite team and win it all!

                </p>
              </div>

                <div className="subTitleNft">
                    <h5>¿How to join the tournament?</h5>
                    <p className='textSubtitle'>
                      o be available to participate you’ll need to decide which ladder you want to compete in and then purchase your special ticket entrance. You can choose between a “Basic Ladder Ticket” or “Premium Ladder Ticket”!
                    </p>
                </div>
            </div>

            <div className="tiposTorneos">   
              <div className="flip">
                  <div className="front" >
                    <h1 className="text-shadow">BASSIC TORUNAMENT</h1>
                  </div>
                  <div className="back">
                    <h2>BASSIC TORUNAMENT</h2>
                    <p>Descripcion torneo BASSIC</p>
                  </div>
              </div>

              <div className="flip">
                  <div className="front" >
                    <h1 className="text-shadow">BOOST TORUNAMENT</h1>
                  </div>
                  <div className="back">
                    <h2>BOOST TORUNAMENT</h2>
                    <p>Descripcion torneo BOOST</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default TournamentMain