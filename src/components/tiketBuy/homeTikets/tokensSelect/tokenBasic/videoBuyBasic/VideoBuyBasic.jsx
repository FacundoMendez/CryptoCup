import React, {useEffect} from 'react'
import basicBuyVideo from "../../../src/basicBuy.mp4"

import videoBuyBasicFuncional from './videoBuyBasicFuncional'

const VideoBuyBasic = () => {
  
  useEffect(() => {
    videoBuyBasicFuncional()
  }, [])
  return (
    <video className='basicBuyVideo' src={basicBuyVideo} autoPlay ></video> 
  )
}

export default VideoBuyBasic