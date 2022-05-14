import React from 'react'
import "./home.css"
import backgroundPrincipal from "./src/BackCopa.png"
import VideoBackground from "./src/videos/particle1.mp4"
import Timer from './timer/Timer'
import Social from './social/Social'

const Home = () => {

  return (
    <div id='home' className="containerHome">
      <div className="containerPrincipalHome">
        <video className='particleVideo' src={VideoBackground} autoPlay loop muted ></video>
        <img src={backgroundPrincipal} alt="backgoundPrincipal" />
        
        <div className='textPrincipalHome'>
          <div className="tite-home">
              <p>Title Lorem ipsum dolor<br />
                      lorem asdoi todoto lso
              </p>
              <div className="buttons_title">
                <button className='Whitelist-buttonTitle'>Presale </button>
                <button className='Tikets-buttonTitle'>Tikets</button>
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