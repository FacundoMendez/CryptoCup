import React, {Suspense, useEffect, useState} from 'react'
import "./token.css"
import tokenScroll from './tokenScroll'
import {FormattedMessage} from 'react-intl';
import tokenModel from "./tokenModel"
import Spinner from '../../../spinner/Spinner'
import TokensReflecs from './tokensReflects/TokensReflecs';
const TokenMain = () => {

    useEffect(()=>{
        tokenModel()
        tokenScroll()

      
    },[])

    
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  return (
    <div id="tokens" className="tokens">
        <div className="titleContainers tokenTitle">
            <h2>
                <FormattedMessage
                    id="token-title"
                    defaultMessage="Deflationary"
                />
            </h2>
        </div>

        <div className="boxText_token">
            
            <p className='t_1'>
                <FormattedMessage
                    id="token-text1"
                    defaultMessage="Issuing tokens too slowly reduces the benefits accessible to earlyadopters and ardent supporters, while flooding the market with tokensoffers little room for speculators and opportunists."
                />
            </p> 
            
            <p className='t_2'>
                <FormattedMessage
                    id="token-text2"
                    defaultMessage="By carefully combining rewards with a long-term token burn mechanism, CryptoCup tackles both of these issues at once. In addition to creating asustainable model of growth for the CCT token, that will motivate holders."
                />
            </p>

            <p className="mark_token">
                <FormattedMessage
                    id="token-text3"
                    defaultMessage="Extremely Low Initial Market Cap"
                />
            </p>

        </div>
        
        <div className="containerToken">

            <div className="box_left_token_prediction">

                <div className="box_text_left_top">
                    <h3 className="title_text_left">
                        <FormattedMessage
                            id="token-box_1"
                            defaultMessage="Listing Price"
                        />
                    </h3>
                    <strong>0,0048 USDT</strong>
                </div>
                <div className="box_text_left_bottom">
                    <h3 className="title_text_left">
                        <FormattedMessage
                            id="token-box_2"
                            defaultMessage="Maximum supply"
                        />
                    </h3>
                    <strong>800,000,000</strong>
                </div>


                <div className="top_left_line"></div>
                <div className="bottom_left_line"></div>

                <div className="box_right_token_prediction movile_right">

                    <div className="box_text_right_top ">
                        <h3 className="title_text_right">
                            <FormattedMessage
                                id="token-box_3"
                                defaultMessage="Supply at listing"
                            />
                        </h3>
                        <strong>10,500,000</strong>
                    </div>
                    <div className="box_text_right_bottom ">
                        <h3 className="title_text_right">
                            <FormattedMessage
                                id="token-box_4"
                                defaultMessage="Initial Market Cap"
                            />
                        </h3>
                        <strong>152.000 USDT</strong>
                    </div>

                    <div className="top_right_line"></div>
                    <div className="bottom_right_line"></div>
                </div>
            </div>
            

            <Suspense fallback={<Spinner/>}>
                {isMobile() ? 
                 <video className='tokenVideoMovil' src="https://res.cloudinary.com/dvrxw8fbg/video/upload/c_scale,h_1080,q_auto:good,w_1080/v1665112548/CryptocupQatar/token/tokenVideo_ghk99c.mp4" autoPlay loop muted ></video>

                 : 
                 <canvas className='tokenWebGl'></canvas>

                }
            </Suspense>
            

            <div className="box_right_token_prediction right-desktop">

                <div className="box_text_right_top">
                    <h3 className="title_text_right">
                        <FormattedMessage
                            id="token-box_3"
                            defaultMessage="Supply at listing"
                        />
                    </h3>
                    <strong>10,500,000</strong>
                </div>
                <div className="box_text_right_bottom">
                    <h3 className="title_text_right">
                        <FormattedMessage
                            id="token-box_4"
                            defaultMessage="Initial Market Cap"
                        />
                    </h3>
                    <strong>152.000 USDT</strong>
                </div>
                
                <div className="top_right_line"></div>
                <div className="bottom_right_line"></div>
                <TokensReflecs/>
            </div>
        </div>

        <p className='comment_token'>
            <FormattedMessage
                id="token-text-sec"
                defaultMessage="CCT will initially launch as a BEP-20 asset on Binance Smart Chain to minimize fees and maximize accessibility. Additional chains will be considered based on user demand and utility."
            />
        </p>

        <div className="grafico">
            <h2>Tokenomics</h2>
            <img src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1080,q_auto:best,w_1920/v1665112547/CryptocupQatar/token/grafico_qe82r9.png" alt="grafico" />
        </div>

    </div>
  )
}

export default TokenMain
