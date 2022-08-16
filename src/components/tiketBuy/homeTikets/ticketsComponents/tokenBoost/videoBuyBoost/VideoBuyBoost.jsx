import React, {useEffect} from 'react'
/* import boostBuyVideo from "../../../src/boostBuy.mp4" */
import videoBuyBoostFuncional from './videoBuyBoostFuncional'

const VideoBuyBoost = () => {

  useEffect(() => {
    videoBuyBoostFuncional()
  },[])
  return (
    <video className='boostBuyVideo' src="https://res.cloudinary.com/dvrxw8fbg/video/upload/v1660658231/CryptocupQatar/TICKETS%20BUY/home%20tickets/boostBuy_ab4apu.mp4"/* {boostBuyVideo} */ preload='none' autoPlay type="video/mp4" ></video> 
  )
}

export default VideoBuyBoost