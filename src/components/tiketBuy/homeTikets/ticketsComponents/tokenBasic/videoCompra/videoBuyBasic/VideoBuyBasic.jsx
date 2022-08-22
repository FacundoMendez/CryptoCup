import React, {useEffect} from 'react'
/* import basicBuyVideo from "../../../../src/basicBuy.mp4" */

import videoBuyBasicFuncional from './videoBuyBasicFuncional'

const VideoBuyBasic = () => {
  
  useEffect(() => {
    videoBuyBasicFuncional()
  }, [])
  return (
    <video className='basicBuyVideo' preload='none'  src= "https://res.cloudinary.com/dvrxw8fbg/video/upload/q_auto:eco/v1660658232/CryptocupQatar/TICKETS%20BUY/home%20tickets/basicBuy_we5tyg.mp4"/* {basicBuyVideo} */ autoPlay type="video/mp4" ></video> 
  )
}

export default VideoBuyBasic