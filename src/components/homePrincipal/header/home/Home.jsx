import React,{useEffect, useState} from 'react'
import "./home.css"
import VideoBackground from "./src/videos/particle1P.mp4"
import Timer from './timer/Timer'
import Social from './social/Social'
import Button from '../../buttons/Button'
import BackPrincipal from "./src/videos/BackPrincipal2.mp4"


const Home = () => {

  const [movil, setMovil] = useState(true)

  useEffect(() => {
    function isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        setMovil(false)
      } 
    }
  
    isMobile()
  },[])

  


  return (
    <div id='home' className="containerHome">
      <div className="containerPrincipalHome">

        {movil ? <video className='BackPrincipal' src={BackPrincipal} autoPlay loop muted ></video> : null}
        

        <video className='particleVideo' src={VideoBackground} autoPlay loop muted ></video>

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