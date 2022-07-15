import React, {lazy} from 'react'
import "./home.css"
import BackPrincipal from "./src/videos/BackCopa2.mp4"
import soonImg from "./src/comingSoon.png"

const Button = lazy(() => import ("../../buttons/Button"))
const Social = lazy(() => import ('./social/Social'))
const Timer = lazy(() => import ('./timer/Timer'))


const Home = () => {

  return (
    <div id='home' className="containerHome">

      <div className="containerPrincipalHome">
        <video className='BackPrincipal' preload='none' src={BackPrincipal} autoPlay loop muted ></video> 
        <div className='textPrincipalHome'>
          <div className="tite-home">
              <h1 className='titlePrincipal'>CRYPTO CUP <br />
                TOURNAMENT
              </h1>
              
              <div className="buttonsHome">
                <a href="./tickets">
                  <Button title="TICKETS"/>
                </a>
            {/* <a href="./presale"> */}
                <div className=" wrapperBottonPresale">
                  <div className="btnPresale">
                    <p> Presale </p>
                    <span className=" BorderTopBottomPresale"></span>
                    <span className=" BorderBottomPresale"></span>
                    <span className=" BorderLeftRightPresale"></span>
                    <img className='comingSoon' src={soonImg} alt="Coming Soon" />
                  </div>
                </div>
            {/*</a> */}
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