import React, {useEffect} from 'react'
import videoBuyBoostFuncional from './videoBuyBoostFuncional'

const VideoBuyBoost = () => {

  useEffect(() => {
    videoBuyBoostFuncional()
  },[])
  return (
    <video className='boostBuyVideo' src="https://res.cloudinary.com/dvrxw8fbg/video/upload/q_auto:eco/v1660658231/CryptocupQatar/TICKETS%20BUY/home%20tickets/boostBuy_ab4apu.mp4"/* {boostBuyVideo} */ preload='none' autoPlay type="video/mp4" ></video> 
  )
}

export default VideoBuyBoost