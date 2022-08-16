import React, {useEffect} from 'react'
import "./referidos.css"
import referidosScroll from './referidosScroll'

/* import smokeVideo from "./src/smoke2.mp4" */
/* import backReferidos from "./src/backReferidos.jpg"
import ticketReferidos from "./src/ticketReferidos.png"
import linesBack from "./src/lines.jpg" */

const Referidos = () => {
  useEffect(() => {
    referidosScroll()
  },[])

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  return (
        <div className='containerReferidos'>


                <img className="backReferidos" src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660657089/CryptocupQatar/referidos/backReferidos_ifrq6n.jpg"  /* {backReferidos} */ alt="background referidos" />
                
                <div className="cortinaTop">
                  <img className='linesBackTop' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660657090/CryptocupQatar/referidos/lines_ftzzb5.jpg"/* {linesBack} */ alt="linesBack" />
                </div>


                  <div className="smoke">
                     <video className='smokeVideo'  src= "https://res.cloudinary.com/dvrxw8fbg/video/upload/v1660657089/CryptocupQatar/referidos/smoke2_u5v5m4.mp4"  /* {smokeVideo} */  muted type="video/mp4"></video> 
                  </div>

                <div className="boxReferidos_t">

                  <div className="textsReferidos">
                      <h2>Refer To Earn</h2>
                      <p>
                      The Referral System will allow you to earn by inviting people to be a part of Crypto Cup!
                      When buying a ticket you will be given a link, which you can share with whoever you want making them get a <span className='spanColor'>great 20% discount</span> on the purchase of their tickets and <span className='spanColor'>benefiting you </span> with <span className='spanColor'>2usd</span> for each basic ticket they buy and <span className='spanColor'>3usd</span> for each boost ticket that will be automatically sent to your wallet <span className='spanColor'> without commissions </span>and ready to spend.

                      <br /> <br />
                     <span className='textStart'> Start earning early with this <span className='spanColor'>win-win</span> deal!</span>
                        
                      </p>
                  </div>
                  <img className="ticketsReferidos" src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660657088/CryptocupQatar/referidos/ticketReferidos_mfeink.png"  /* {ticketReferidos} */ alt="tickets referidos" />

                </div>

                <div className="cortinaBottom">
                  <img className='linesBackBottom' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660657090/CryptocupQatar/referidos/lines_ftzzb5.jpg"/* {linesBack} */ alt="linesBack" />
                </div>
            </div>
   
  )
}

export default Referidos