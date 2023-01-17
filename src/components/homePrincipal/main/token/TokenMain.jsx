import React, {Suspense, useEffect} from 'react'
import "./token.css"
import {FormattedMessage} from 'react-intl';
import tokenModel from "./tokenModel"
import Spinner from '../../../spinner/Spinner'
import TokensReflecs from './tokensReflects/TokensReflecs';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';


const TokenMain = () => {

    useEffect(()=>{

        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        
        const tokenScroll = () =>{

            if (!isMobile()) {

                gsap.registerPlugin(ScrollTrigger); 

                let tl_token = gsap.timeline({
                    scrollTrigger:{
                        trigger: ".tokens",
                        start: "top 50%",
                        end: "bottom bottom",
                    }
                })

                tl_token.from(".tokenTitle" , {
                    opacity:0,
                })

                tl_token.from(".boxText_token" , {
                    duration:.3,
                    opacity:0,
                })
                tl_token.from(".t_1" , {
                    duration:.3,
                    opacity:0,
                })
                tl_token.from(".t_2" , {
                    duration:.3,
                    opacity:0,
                })

                tl_token.from(".t_2" , {
                    duration:.3,
                })

                tl_token.from(".box_porcentTokens" , {
                    duration:.3,
                    opacity:0,
                })


                let tl_token2 = gsap.timeline({
                    scrollTrigger:{
                        trigger: ".containerToken",
                        start: "top 50%",
                        end: "bottom bottom",
                    }
                })

                tl_token2.from(".tokenWebGl" , {
                    opacity:0,
                    scale:0,
                    duration:1
                })

                tl_token2.from(".containerTokenReflect" , {
                    opacity:0,
                    duration:.2,
                    scale:0,
                })
                

                tl_token2.from(".top_left_line" , {
                    duration:.2,
                    opacity:0,
                })
                tl_token2.from(".box_left_token_prediction" , {
                    duration:.2,
                    opacity:0,
                })

                tl_token2.from(".bottom_left_line" , {
                    duration:.2,
                    opacity:0,
                })
                tl_token2.from(".box_text_left_bottom" , {
                    duration:.2,
                    opacity:0,
                })


                tl_token2.from(".top_right_line" , {
                    duration:.2,
                    opacity:0,
                })
                tl_token2.from(".box_text_right_top" , {
                    duration:.2,
                    opacity:0,
                })
                tl_token2.from(".bottom_right_line" , {
                    opacity:0,
                    duration:.2,
                })
                tl_token2.from(".box_text_right_bottom" , {
                    duration:.2,
                    opacity:0,
                })

                tl_token2.from(".comment_token" , {
                    opacity:0,
                })

            }

        }


        tokenModel()
        tokenScroll()

        return () => {
            tokenScroll()
            tokenModel()
        }
      
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

            <p className='t_subtitle'>
                <FormattedMessage
                    id="token-subtitle2"
                    defaultMessage="7% Fee on all sell orders"
                />
            </p> 
            
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


            <div className="box_porcentTokens">
                <div className="porcent_token">
                    <strong>1%</strong>
                    <p>
                        <FormattedMessage
                            id="token-porcent1"
                            defaultMessage="Burn"
                        />
                    </p>
                </div>
                <div className="porcent_token">
                    <strong>1%</strong>
                    <p>
                        <FormattedMessage
                            id="token-porcent2"
                            defaultMessage="Staking Rewards"
                        />
                    </p>
                    <p></p>
                </div>
                <div className="porcent_token">
                    <strong>2%</strong>
                    <p>
                        <FormattedMessage
                            id="token-porcent3"
                            defaultMessage="Reserve (Used to prize pools)"
                        />
                    </p>
                </div>
                <div className="porcent_token">
                    <strong>3%</strong>
                    <p>
                        <FormattedMessage
                            id="token-porcent3"
                            defaultMessage="Marketing and Development"
                        />
                    </p>
                </div>
            </div>



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
                    <strong>0,005 USDT</strong>
                </div>
                <div className="box_text_left_bottom">
                    <h3 className="title_text_left">
                        <FormattedMessage
                            id="token-box_2"
                            defaultMessage="Maximum supply"
                        />
                    </h3>
                    <strong>1,000,000,000</strong>
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
                        <strong>650,000</strong>
                    </div>
                    <div className="box_text_right_bottom ">
                        <h3 className="title_text_right">
                            <FormattedMessage
                                id="token-box_4"
                                defaultMessage="INITIAL F.D MARKET CAP"
                            />
                        </h3>
                        <strong>5.000.000</strong>
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
                    <strong>650,000</strong>
                </div>
                <div className="box_text_right_bottom">
                    <h3 className="title_text_right">
                        <FormattedMessage
                            id="token-box_4"
                            defaultMessage="INITIAL F.D MARKET CAP"
                        />
                    </h3>
                    <strong>5.000.000</strong>
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
            <img src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1080,q_auto:best,w_1920/v1667608031/CryptocupQatar/token/grafico_tbzeub.png" alt="grafico" />
        </div>

    </div>
  )
}

export default TokenMain
