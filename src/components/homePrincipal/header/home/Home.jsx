import React, {lazy, Suspense, useEffect} from 'react'
import "./home.css"
import {FormattedMessage} from 'react-intl';
/* import NavAnnouncement from './nav_announcement/NavAnnouncement';
import Presale from '../../main/token/presale/Presale'; */
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import fire from "./fuego3.mp4"
import Spinner from '../../../spinner/Spinner';


const NavHeader = lazy(() => import ('../../header/nav/NavHeader'))
const Button = lazy(() => import ("../../buttons/Button"))
const Social = lazy(() => import ('./social/Social'))
const Timer = lazy(() => import ('./timer/Timer'))


const Home = () => {

  useEffect(() => {
    gsap.from(".navBallModel",{
      opacity:0,
      duration:1.8,
      scale:.2,
    })

  },[])
 
  return (
    <div id='home' className="containerHome" >
      <NavHeader />

      <div className="containerPrincipalHome">

        <div className='textPrincipalHome'>
          <div className="tite-home">
              <h1 className='titlePrincipal'>
                <FormattedMessage
                    id="home-title"
                    defaultMessage="CRYPTO CUP TOURNAMENT" 
                />
              </h1>
              
              <div className="buttonsHome">
                <a href="/tickets">
                  <Button title="BUY TICKETS"/>          
                </a>
                <div className=" wrapperBottonPresale">
                  
                <Suspense fallback={Spinner}>
                  <a href="/">
                    <div className="btnPresale">
                      <p>       
                        <FormattedMessage
                            id="home-presale"
                            defaultMessage="Presale" 
                        />
                      </p>

                      <video className='fire' src={fire} autoPlay loop muted ></video>
                      <img className='firegif2' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_498,q_auto:low,w_270/v1665113047/CryptocupQatar/Home%20/fireGif2_bwyrqj.gif" alt="fire Gif" />
                      <img className='firegif' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_498,q_auto:low,w_270/v1665113047/CryptocupQatar/Home%20/fireGif2_bwyrqj.gif" alt="fire Gif" />
                    </div>
                  </a>
                </Suspense>
                </div>
            </div>
            <Timer />
          </div>
        </div>
      </div>    
    
      <Social />
   {/*    <NavAnnouncement/> */}
    </div>

  )
}

export default Home