import React, {useEffect, lazy} from 'react'
import "./present.css"
import presentScroll from './presentScroll'

const ButtonFloatTickets = lazy(() => import ("./ButtonFloatTickets"))

const TournamentMain = () => {

  useEffect(() =>{
    presentScroll()
  },[])

  return (
      <div id='tournament' className="tournamentContainer">

        
        <img className="backgroundReflejo backPresentacion"src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:low/v1660656597/CryptocupQatar/present/BackTournament2_zc1ex3.webp" /* {backgroundReflejo} */  alt="backReflejo" />
        
        <div className="boxTournament">

            <div className="containerTexts">

              <div className="titleContainers tournamentTitle">
                <h2>Crypto Cup</h2>
                <h3>The next innovative world tournament</h3>
              </div>

              <div className="subTitlePrize">
                <p>
                Crypto Cup is the first crypto tournament based on predictions of the Fifa World Cup 2022.
                We encourage you to be a part of this journey with a very accessible opportunity to start competing and winning big bounties. <br /> <br />

                We look to empower your tournaments experience by bringing an innovative platform to dabble you into crypto competition based in real tournaments. We will stick to a decentralized tournament model, showing transparency and trying to distribute pool rewards to as many participants as possible.<br /> <br />

                You'll be allowed to join a low-cost opportunity and the chance to win a big pool prize, unique NFTs and more! Prove your soccer insights competing with your friends and the world, cheer for your favorite team and win it all! The exponential increase of crypto adoption is yet to come, don't get left behind!<br /> <br />
                </p>
              </div>

              <div className="logoContainer">
                  <img className='imgLogoContainer' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:good/v1660656597/CryptocupQatar/present/Logo_br3xr2.webp"/* {logo} */ alt="logo CRYPTO CUP" />

                  <canvas className='effectLogo'></canvas>

              </div>

            </div>
          <ButtonFloatTickets/>

          </div>
        </div>
  )
}

export default TournamentMain