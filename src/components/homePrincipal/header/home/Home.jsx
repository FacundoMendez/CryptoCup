import React, {lazy, useEffect} from 'react'
import "./home.css"
import {FormattedMessage} from 'react-intl';
import NavAnnouncement from './nav_announcement/NavAnnouncement';
import Presale from '../../main/token/presale/Presale';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';

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
                  
                <NavLink to="/presale">
                  <div className="btnPresale">
                    <p>       
                      <FormattedMessage
                          id="home-presale"
                          defaultMessage="Presale" 
                      />
                    </p>
                  </div>
                </NavLink>
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