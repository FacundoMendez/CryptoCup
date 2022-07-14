import React, {useEffect, lazy} from 'react'
import basicBuyVideo from "../../../src/basicBuy.mp4"
const videoBuyBasicFuncional = lazy(() => import ('./videoBuyBasicFuncional'))

const VideoBuyBasic = () => {
  
  useEffect(() => {
    videoBuyBasicFuncional()
  }, [])
  return (
    <video className='basicBuyVideo' src={basicBuyVideo} autoPlay ></video> 
  )
}

export default VideoBuyBasic