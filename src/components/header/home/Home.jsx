import React, {useEffect} from 'react'
import "./home.css"
import cup from './cup'
import backgroundPrincipal from "./src/bannerPrincipal.png"
import Timer from './timer/Timer'

const Home = () => {

  useEffect(()=>{
    cup()
  },[])


  return (
    <div id='home' className="containerHome">
      <div className="containerPrincipalHome">
        <img src={backgroundPrincipal} alt="backgoundPrincipal" />
        
        <div className='textPrincipalHome'>
          <div className="tite-home">
              <p>Title Lorem ipsum dolor sit amet <br />
                      lorem asdoi todoto lso
              </p>
              <div className="buttons_title">
                <button className='Whitelist-buttonTitle'>Whitelist</button>
                <button className='Tikets-buttonTitle'>Tikets</button>
              </div>

             <Timer/>
          </div>
        
        </div>

        <canvas className='cupWebGl'></canvas>  
      </div>    

      <div id="tournament" className="tournament"></div>

      <div id="tikets" className="tikets"></div>

      <div id="tokens" className="tokens"></div>
{/* 
      <div id="tournament" className="tournament"></div> */}
    </div>

  )
}

export default Home