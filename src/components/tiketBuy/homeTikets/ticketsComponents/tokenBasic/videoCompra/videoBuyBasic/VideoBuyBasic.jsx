import React, {useEffect} from 'react'
import basicBuyVideo from "../../../../src/basicBuy.mp4"

import videoBuyBasicFuncional from './videoBuyBasicFuncional'

const VideoBuyBasic = () => {
  
  useEffect(() => {
    videoBuyBasicFuncional()
  }, [])
  return (
    <video className='basicBuyVideo' preload='none'  src={basicBuyVideo} autoPlay type="video/mp4" ></video> 
  )
}

export default VideoBuyBasic