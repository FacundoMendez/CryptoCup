import React, {lazy, useEffect} from 'react'
import "./home.css"
import homeScroll from './homeScroll'
import {FormattedMessage} from 'react-intl';
import NavAnnouncement from './nav_announcement/NavAnnouncement';
const NavHeader = lazy(() => import ('../../header/nav/NavHeader'))

const Button = lazy(() => import ("../../buttons/Button"))
const Social = lazy(() => import ('./social/Social'))
const Timer = lazy(() => import ('./timer/Timer'))

const Home = () => {

  useEffect(() => {
    homeScroll()
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
                  <div className="btnPresale">
                    <p>       
                      <FormattedMessage
                          id="home-presale"
                          defaultMessage="Presale" 
                      />
                  </p>
                    <span className=" BorderTopBottomPresale"></span>
                    <span className=" BorderBottomPresale"></span>
                    <span className=" BorderLeftRightPresale"></span>
                    <img className='comingSoon' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_62,q_auto:low,w_346/v1660656414/CryptocupQatar/Home%20/comingSoon_xoiyc1.png" alt="Coming Soon" />
                  </div>
                </div>
            </div>
            <Timer />
          </div>
        </div>
      </div>    
    
      <Social />
      <NavAnnouncement/>
    </div>

  )
}

export default Home