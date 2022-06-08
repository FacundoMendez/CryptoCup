import React, {useEffect} from 'react'
import "./present.css"
import backgroundReflejo from "./src/BackTournament.jpg"
import presentScroll from './presentScroll'

const TournamentMain = () => {

  useEffect(() =>{
    presentScroll()
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
            </div>
          </div>
        </div>
  )
}

export default TournamentMain