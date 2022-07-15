import React, {useEffect} from 'react'
import boostBuyVideo from "../../../src/boostBuy.mp4"
import videoBuyBoostFuncional from './videoBuyBoostFuncional'

const VideoBuyBoost = () => {

  useEffect(() => {
    videoBuyBoostFuncional()
  },[])
  return (
    <video className='boostBuyVideo' src={boostBuyVideo} preload='none' autoPlay ></video> 
  )
}

export default VideoBuyBoost