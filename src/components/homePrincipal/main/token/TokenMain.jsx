import React, {Suspense, useEffect} from 'react'
import "./token.css"
import tokenScroll from './tokenScroll'
/* import {FormattedMessage} from 'react-intl'; */
import tokenModel from "./tokenModel"
import Spinner from '../../../spinner/Spinner'
import Presale from './presale/Presale'

const TokenMain = () => {

    useEffect(()=>{
        tokenModel()
        tokenScroll()
    },[])

  return (
    <div id="tokens" className="tokens">
        <div className="titleContainers tokenTitle">
            <h2>TOKENOMICS</h2>
        </div>
{/* 
        <div className="enterPresale">
           <h3>Enter Presale Now</h3> 
        </div> */}

        <div className="boxText_token">
            <p>
                Issuing tokens too slowly reduces the benefits accessible to earlyadopters and ardent supporters, while flooding the market with tokensoffers little room for speculators and opportunists.
            </p> 
            
            <p>
                By carefully combining rewards with a long-term token burn mechanism,CryptoCup tackles both of these issues at once. In addition to creating asustainable model of growth for the CCT token, that will motivate holders.
            </p>
        </div>
        <div className="containerToken">
            <div className="box_left_token_prediction">
                <div className="top_left_line"></div>
                <div className="bottom_left_line"></div>
            </div>

            <Suspense fallback={<Spinner/>}>
                <canvas className='tokenWebGl'></canvas>
            </Suspense>

            <div className="box_right_token_prediction">
                <div className="top_right_line"></div>
                <div className="bottom_right_line"></div>
            </div>
        </div>

        <p className='comment_token'>CCT will initially launch as a BEP-20 asset on Binance Smart Chain to minimize fees and maximize accessibility. Additional chains will be considered based on user demand and utility.</p>

    </div>
  )
}

export default TokenMain
