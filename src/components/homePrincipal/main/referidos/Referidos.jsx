import React, {useEffect} from 'react'
import "./referidos.css"
import {FormattedMessage} from 'react-intl';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const Referidos = () => {

  useEffect(() => {

    function isMobile() {

      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }


    
    const referidosScroll = () =>{

      const videoSmoke = document.querySelector(".smokeVideo")

      if (!isMobile()) {

          gsap.registerPlugin(ScrollTrigger); 



          const animateRefers = () => {
              gsap.to(".cortinaTop",{
                  y: "-94.5%",
                  duration:3.5,
                  delay:.2,
              })
          
              gsap.to(".cortinaBottom",{
                  y: "94.5%",
                  duration:3.5,
                  delay:.2,
              })

              gsap.to(".boxReferidos_t",{
                  duration:3,
                  delay:2.35,
                  opacity:1,
          
              })
              gsap.to(".backReferidos",{
                  duration:4,
                  delay:2.35,
                  opacity:1,
              })

              gsap.to(".smoke",{
                  duration:4,
                  delay:3,
                  opacity:-2,
              })

              videoSmoke.play()
          }

          ScrollTrigger.create({
              trigger: ".containerReferidos",
              start: "top 10%",
              end:"100%",
              /* pin: true, */
              onEnter : animateRefers , 
              scrub: 4,
              invalidateOnRefresh: true,
          })

        }else{
          videoSmoke.classList.remove("smoke")
      }

    }

    referidosScroll()

    return () => {
      referidosScroll()
      isMobile()
    }
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
                            defaultMessage="The Referral System allows you to earn by inviting people to be part of Crypto Cup! When buying a ticket you will be given a link, which you can share with whoever you want making them get a GREAT 20% DISCOUNT on their Ticket purchase, and also Benefiting you with 1 USDT for each Boost Ladder Ticket sold throw your link. That amount will be automatically deposite don your wallet WITHOUT COMISSIONS and ready to spend. "
                          />
        
                    </p>
                  </div>
                  <img className="ticketsReferidos" src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_605,q_auto:best,w_768/v1663189571/CryptocupQatar/referidos/TicketsRefer_hh1qee.png"  alt="tickets referidos" />

                </div>

                <div className="cortinaBottom">
                  <img className='linesBackBottom' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_215,q_auto:eco,w_1569/v1660657090/CryptocupQatar/referidos/lines_ftzzb5.webp" alt="linesBack" />
                </div>
            </div>
   
  )
}

export default Referidos