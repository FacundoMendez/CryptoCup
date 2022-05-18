import React from 'react'
import "./home.css"
import backgroundPrincipal from "./src/BackCopa.png"
import VideoBackground from "./src/videos/particle1.mp4"
import Timer from './timer/Timer'
import Social from './social/Social'
import Button from '../../buttons/Button'
import BackPrincipal from "./src/videos/BackPrincipal.mp4"


const Home = () => {

  return (
    <div id='home' className="containerHome">
      <div className="containerPrincipalHome">

        <video className='BackPrincipal' src={BackPrincipal} autoPlay loop muted ></video>

        <video className='particleVideo' src={VideoBackground} autoPlay loop muted ></video>

        <div className='textPrincipalHome'>
          <div className="tite-home">
              <p>CRYPTO CUP <br />
                TOURNAMENT
              </p>

            <div className="buttonsHome">
              <a href="./tikets">
                <Button title="TIKETS"/>
              </a>

              <a href="./presale">
                <Button title="PRESALE"/>
              </a>
            </div>

             <Timer/>
          </div>
        
        </div>
        <Social />

      </div>    

    </div>

  )
}

export default Home