import React, {useEffect} from 'react'
import "./token.css"
import tokenScroll from './tokenScroll'
/* import tokenModel from './tokenModel' */
/* import backToken from "./src/BackToken.jpg"
import tokenComingSoon from "./src/tokenComingSoon.jpg"
import tokenVideo from "./src/tokenVideo.mp4" */

const TokenMain = () => {

    useEffect(()=>{
        /* tokenModel() */
        tokenScroll()
    },[])

  return (
    <div id="tokens" className="tokens">
        <img className='backToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:low/v1660656688/CryptocupQatar/token/BackToken_rhhx0w.jpg"/* {backToken} */ alt="Background Token" />
        <div className="tokenblur">
            {/* <img className='comingToken' src={comingToken} alt="Background Token ComingSoon" /> */}
            <img className='tokenComingSoon-left' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:eco/v1660656687/CryptocupQatar/token/tokenComingSoon_oqzlox.jpg"/* {tokenComingSoon} */ alt="tokenComingSoon-left" /> 
            <img className='tokenComingSoon-right' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:eco/v1660656687/CryptocupQatar/token/tokenComingSoon_oqzlox.jpg"/* {tokenComingSoon} */ alt="tokenComingSoon-right" /> 
        </div>
        <div className="titleContainers tokenTitle">
            <h2>TOKEN</h2>
        </div>

        <div className="containerToken">
            <div className="textToken">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque neque minima ab ipsa animi impedit quo earum, et placeat fugit. Modi quidem ut nemo a impedit praesentium distinctio illum.</p>
            </div>
           {/*  <canvas className='tokenWebGl'></canvas> */}
            <img className='tokenVideo' preload='none' src= "https://res.cloudinary.com/dvrxw8fbg/video/upload/ac_none,c_scale,h_203,q_auto:low/v1660656689/CryptocupQatar/token/tokenVideo_l9kbux.gif" alt='gifToken'></img> 
        </div>
    </div>
  )
}

export default TokenMain

