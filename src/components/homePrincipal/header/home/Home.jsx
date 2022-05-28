import React from 'react'
import "./home.css"
import Timer from './timer/Timer'
import Social from './social/Social'
import Button from '../../buttons/Button'
import BackPrincipal from "./src/videos/BackCopa2.mp4"

const Home = () => {

  return (
    <div id='home' className="containerHome">
      <div className="containerPrincipalHome">

        <video className='BackPrincipal' src={BackPrincipal} autoPlay loop muted ></video> 
        

        <div className='textPrincipalHome'>
          <div className="tite-home">
              <p className='titlePrincipal'>CRYPTO CUP <br />
                TOURNAMENT
              </p>
            <div className="buttonsHome">
              <a href="./tickets">
                <Button title="TICKETS"/>
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