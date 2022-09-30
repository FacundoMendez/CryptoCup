import React, {Suspense, useEffect} from 'react'
import "./token.css"
import tokenScroll from './tokenScroll'
/* import {FormattedMessage} from 'react-intl'; */

import tokenModel from "./tokenModel"
import Spinner from '../../../spinner/Spinner'
import TimerPresaleToken from './timerPresaleToken/TimerPresaleToken'

const TokenMain = () => {

    useEffect(()=>{
        tokenModel()
        tokenScroll()
    },[])

  return (
    <div id="tokens" className="tokens">
        <div className="titleContainers tokenTitle">
            <h2>TOKEN</h2>
        </div>

        <div className="enterPresale">
           <h3>Enter Presale Now</h3> 
        </div>

        <div className="containerToken">
            <Suspense fallback={<Spinner/>}>
                <canvas className='tokenWebGl'></canvas>
            </Suspense>
        </div>

        <TimerPresaleToken />

{/*         <button className=''>Connect Metamask</button>
        
        <button className=''></button> */}
    </div>
  )
}

export default TokenMain
