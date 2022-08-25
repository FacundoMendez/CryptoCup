import React, {lazy, useEffect, useState} from 'react'
import "./home.css"
import homeScroll from './homeScroll'

const NavHeader = lazy(() => import ('../../header/nav/NavHeader'))

const Button = lazy(() => import ("../../buttons/Button"))
const Social = lazy(() => import ('./social/Social'))
const Timer = lazy(() => import ('./timer/Timer'))

const Home = () => {

  const [esMovil , setEsMovil] = useState(false)

  function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
}

  useEffect(() => {
    if(isMobile()){
      setEsMovil(true)
    } else {
      setEsMovil(false)
    } 
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
                <a href="./tickets">
                  {!esMovil ? <Button title="BUY TICKETS"/> : <Button title="TICKETS"/>}
                  
                </a>
                <div className=" wrapperBottonPresale">
                  <div className="btnPresale">
                    <p> Presale </p>
                    <span className=" BorderTopBottomPresale"></span>
                    <span className=" BorderBottomPresale"></span>
                    <span className=" BorderLeftRightPresale"></span>
                    <img className='comingSoon' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:low/v1660656414/CryptocupQatar/Home%20/comingSoon_xoiyc1.png" alt="Coming Soon" />
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