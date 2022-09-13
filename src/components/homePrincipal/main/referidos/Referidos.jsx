import React, {useEffect} from 'react'
import "./referidos.css"
import referidosScroll from './referidosScroll'
import {FormattedMessage} from 'react-intl';


const Referidos = () => {
  useEffect(() => {
    referidosScroll()
  },[])



  return (
        <div className='containerReferidos'>

                <img className="backReferidos" src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1080,q_auto:good,w_1920/v1660657089/CryptocupQatar/referidos/backReferidos_ifrq6n.webp"  /* {backReferidos} */ alt="background referidos" />
                
                <div className="cortinaTop">
                  <img className='linesBackTop' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_215,q_auto:eco,w_1569/v1660657090/CryptocupQatar/referidos/lines_ftzzb5.webp"/* {linesBack} */ alt="linesBack" />
                </div>


                  <div className="smoke">
                     <video className='smokeVideo'  src= "https://res.cloudinary.com/dvrxw8fbg/video/upload/c_scale,h_1080,q_auto:eco,w_1920/v1660657089/CryptocupQatar/referidos/smoke2_u5v5m4.mp4"  /* {smokeVideo} */  muted type="video/mp4"></video> 
                  </div>

                <div className="boxReferidos_t">

                  <div className="textsReferidos">
                      <h2>
                        <FormattedMessage
                          id="referral-title"
                          defaultMessage="Refer To Earn "
                        />
                      </h2>
                      <p>

                        <FormattedMessage
                            id="referral-text"
                            defaultMessage="The Referral System will allow you to earn by inviting people to be a part of Crypto Cup!
                            When buying a ticket you will be given a link, which you can share with whoever you want making them get a "
                          />
                      <span className='spanColor'>
                        <FormattedMessage
                          id="referral-textSpan1"
                          defaultMessage="great 20% discount"
                        />
                      </span>
                    
                        <FormattedMessage
                          id="referral-textSpan2"
                          defaultMessage="on the purchase of their tickets and"
                        />
                      <span className='spanColor'>
                        <FormattedMessage
                          id="referral-textSpan3"
                          defaultMessage="benefiting you"
                        />
                      </span>

                        <FormattedMessage
                          id="referral-textSpan4"
                          defaultMessage="with"
                        />

                      <span className='spanColor'>
                        <FormattedMessage
                          id="referral-textSpan5"
                          defaultMessage="2usd"
                        />
                      </span>

                        <FormattedMessage
                          id="referral-textSpan6"
                          defaultMessage="for each basic ticket they buy and"
                        />

                      <span className='spanColor'>
                        <FormattedMessage
                          id="referral-textSpan7"
                          defaultMessage="3usd"
                        />
                      </span>

                        <FormattedMessage
                          id="referral-textSpan8"
                          defaultMessage="for each boost ticket that will be automatically sent to your wallet "
                        />

                      <span className='spanColor'>
                        <FormattedMessage
                          id="referral-textSpan9"
                          defaultMessage="without commissions "
                        />
                      </span>
                        <FormattedMessage
                          id="referral-textSpan10"
                          defaultMessage="and ready to spend."
                        />
    
                      <br /> <br />

                      <span className='textStart'> 
                        <FormattedMessage
                          id="referral-text2"
                          defaultMessage=" Start to ear early with this "
                        />
   <                    span className='spanColor'>
                        <FormattedMessage
                            id="referral-text2Span1"
                            defaultMessage="win-win"
                          />
                        </span>
                        <FormattedMessage
                          id="referral-text2Span2"
                          defaultMessage=" deal!"
                        />
                      </span>
                    </p>
                  </div>
                  <img className="ticketsReferidos" src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_979,q_auto:good,w_1222/v1660657088/CryptocupQatar/referidos/ticketReferidos_mfeink.png"  alt="tickets referidos" />

                </div>

                <div className="cortinaBottom">
                  <img className='linesBackBottom' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_215,q_auto:eco,w_1569/v1660657090/CryptocupQatar/referidos/lines_ftzzb5.webp" alt="linesBack" />
                </div>
            </div>
   
  )
}

export default Referidos