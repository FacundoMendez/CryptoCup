import React, {lazy, useEffect, useState} from 'react'
import "./home.css"
import particulasCopa from "../../../tiketBuy/homeTikets/src/particle1P.mp4"
import soonImg from "./src/comingSoon.png"


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


    const elems = document.querySelectorAll('.copa');
    const layer3 = document.querySelector('.estadio');
    const layer4 = document.querySelector('.piso');
    
    
    setTimeout(function () {
        elems.forEach(function (elem, index) {
            elem.style.animation = "none";
        });
    }, 1500);
    
    
  },[])



 
  return (
    <div id='home' className="containerHome">

      <div className="containerPrincipalHome">

      {  !esMovil  ?   <video className='backPrincipal' src={particulasCopa} autoPlay loop muted  type="video/mp4"></video> : null  }

        <div className='textPrincipalHome'>
          <div className="tite-home">
              <h1 className='titlePrincipal'> CRYPTO CUP <br />
                TOURNAMENT
              </h1>
              
              <div className="buttonsHome">
                <a href="./tickets">
                  {!esMovil ? <Button title="BUY TICKETS"/> : <Button title="TICKETS"/>}
                  
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
      </div>    
    
      <Social />

    </div>

  )
}

export default Home