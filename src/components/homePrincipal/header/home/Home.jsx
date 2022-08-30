import React, {lazy, useEffect} from 'react'
import "./home.css"
import homeScroll from './homeScroll'

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
              <h1 className='titlePrincipal'> CRYPTO CUP <br />
                TOURNAMENT
              </h1>
              
              <div className="buttonsHome">
                <a href="/tickets">
                  <Button title="BUY TICKETS"/>
                  
                </a>
                <div className=" wrapperBottonPresale">
                  <div className="btnPresale">
                    <p> Presale </p>
                    <span className=" BorderTopBottomPresale"></span>
                    <span className=" BorderBottomPresale"></span>
                    <span className=" BorderLeftRightPresale"></span>
                    <img className='comingSoon' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:low/v1660656414/CryptocupQatar/Home%20/comingSoon_xoiyc1.webp" alt="Coming Soon" />
                  </div>
                </div>
            </div>
            <Timer/>
          </div>
        </div>
      </div>    
    
      <Social />

    </div>

  )
}

export default Home