import React, {useEffect} from 'react'
import "./referidos.css"
import backReferidos from "./src/backReferidos.jpg"
import ticketReferidos from "./src/ticketReferidos.png"
import linesBack from "./src/lines.jpg"
import referidosScroll from './referidosScroll'
import smokeVideo from "./src/smoke2.mp4"


const Referidos = () => {
  useEffect(() => {
    referidosScroll()
  },[])

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  return (
        <div className='containerReferidos'>


                <img className="backReferidos" src={backReferidos} alt="background referidos" />
                
                <div className="cortinaTop">
                  <img className='linesBackTop' src={linesBack} alt="linesBack" />
                </div>


                  <div className="smoke">
                     <video className='smokeVideo'  src={smokeVideo}  muted type="video/mp4"></video> 
                  </div>

                <div className="boxReferidos_t">

                  <div className="textsReferidos">
                      <h2>Refer To Earn</h2>
                      <p>
The Referral System will allow you to earn by inviting people to be a part of Crypto Cup!
When buying a ticket you will be given a link, which you can share with whoever you want making them get a <span className='spanColor'>great 20% discount</span> on the purchase of their tickets and <span className='spanColor'>benefiting you </span> with <span className='spanColor'>2usd</span> for each basic ticket they buy and <span className='spanColor'>3usd</span> for each boost ticket that will be automatically sent to your wallet <span className='spanColor'> without commissions </span>and ready to spend.
<br /> Start earning early with this <span className='spanColor'>win-win</span> deal!
                        
                        
                        
                      </p>
                  </div>
                  <img className="ticketsReferidos" src={ticketReferidos} alt="tickets referidos" />

                </div>

                <div className="cortinaBottom">
                  <img className='linesBackBottom' src={linesBack} alt="linesBack" />
                </div>
            </div>
   
  )
}

export default Referidos