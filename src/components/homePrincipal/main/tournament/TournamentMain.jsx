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
                <h2>Crypto Cup</h2>
                <h3>The next innovative world tournament</h3>
              </div>

              <div className="subTitlePrize">
                <p>
                Crypto Cup is the first crypto tournament based on predictions of the Fifa World Cup 2022. <br /> <br />
                A key piece of the crypto ecosystem is the competition, which will exponentially increase its player base in the next coming years, so we encourage you to be a part of this journey with a very accessible opportunity to start learning and also win big bounties. With its exponential growth possibilities, you'll be allowed to join a low-cost opportunity and the chance to win a big pool prize, unique NFTs and more! Prove your soccer insights competing with your friends and the world, cheer for your favorite team and win it all!

                </p>
              </div>
{/* 
                <div className="subTitleNft">
                    <h5>¿How to join the tournament?</h5>
                    <p className='textSubtitle'>
                      o be available to participate you’ll need to decide which ladder you want to compete in and then purchase your special ticket entrance. You can choose between a “Basic Ladder Ticket” or “Premium Ladder Ticket”!
                    </p>
                </div> */}
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