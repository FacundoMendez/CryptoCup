import React, {useEffect} from 'react'
import boostBuyVideo from "../../../src/boostBuy.mp4"
import videoBuyBoostFuncional from './videoBuyBoostFuncional'

const VideoBuyBoost = () => {

  useEffect(() => {
    videoBuyBoostFuncional()
  },[])
  return (
    <video className='boostBuyVideo' src={boostBuyVideo} autoPlay loop muted ></video> 
  )
}

export default VideoBuyBoost