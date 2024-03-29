import React, {useEffect, lazy} from 'react'
import "./present.css"
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import VanillaTilt from "vanilla-tilt";

import {FormattedMessage} from 'react-intl';
const ButtonFloatTickets = lazy(() => import ("./ButtonFloatTickets"))

const TournamentMain = () => {

  useEffect(() =>{


      function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      }

      const tournamentScroll = () =>{

        if (!isMobile()) {
              VanillaTilt.init(document.querySelectorAll(".boxPresale"), {
                  max:.5,
                  speed: 400,
                  perspective: 300,
                  glare: true,
                  "max-glare": 0.02,
              });
              
            gsap.registerPlugin(ScrollTrigger);
        
                let tl_present = gsap.timeline({
                    scrollTrigger:{
                        trigger: ".boxTournament",
                        start: "top center",
                        end: "bottom bottom",
                    }
                })

                tl_present.from(".containerTexts",{
                    opacity:0,
                })

                gsap.from(".backPresentacion",{
                    opacity:0,
                    duration: 3,
                    scrollTrigger:{
                        trigger: ".boxTournament",
                        start: "top center",
                        end: "bottom bottom",
                    }
                })


                let tl_logoPresent = gsap.timeline({
                    scrollTrigger:{
                        trigger: ".subTitlePrize",
                        start: "top -100",
                        end: "bottom bottom",
              
                    }
                })

                tl_logoPresent.from(".logoContainer",{
                        y: 60,
                        opacity:0,
                })

                tl_logoPresent.from(".boxButtonTicketBuy",{
                    y: 60,
                    opacity:0,
            })     
        }
        
    }

    tournamentScroll()

    return () => {
      tournamentScroll()
      isMobile()

    }

  },[])

  return (
      <div id='tournament' className="tournamentContainer">

        
        <img className="backgroundReflejo backPresentacion"src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_2400,q_auto:best,w_2500/v1660656597/CryptocupQatar/present/BackTournament2_zc1ex3.webp" /* {backgroundReflejo} */  alt="backReflejo" />
        
        <div className="boxTournament">

            <div className="containerTexts">

              <div className="titleContainers tournamentTitle">
                <h2>Crypto Cup</h2>
                <h3>
                  <FormattedMessage
                      id="present-subTitle"
                      defaultMessage="The next innovative world tournament"
                  />
                </h3>
              </div>

              <div className="subTitlePrize">
                <p>

                  <FormattedMessage
                      id="present-text1"
                      defaultMessage=" Crypto Cup is the first crypto tournament based on predictions of the World Cup 2022. We encourage you to be a part of this journey with a very accessible opportunity to start competing and winning big bounties. "
                  />
                </p><br /> <br />
                <p>

                  <FormattedMessage
                      id="present-text2"
                      defaultMessage="We look to empower your tournaments experience by bringing an innovative platform to dabble you into crypto competition based in real tournaments. We will stick to a decentralized tournament model, showing transparency and trying to distribute pool rewards to as many participants as possible."
                  />
                
                </p><br /> <br />
                <p>

                  <FormattedMessage
                      id="present-text3"
                      defaultMessage="You'll be allowed to join a low-cost opportunity and the chance to win a big pool prize, unique NFTs and more! Prove your soccer insights competing worldwide with your friends, cheer for your favorite team and win it all! The exponential increase of crypto adoption is yet to come, don't get left behind!"
                  />
                
                </p><br /> <br />
              </div>

              <div className="logoContainer">
                  <img className='imgLogoContainer' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_500,q_auto:best,w_500/v1660656597/CryptocupQatar/present/Logo_br3xr2.png"/* {logo} */ alt="logo CRYPTO CUP" />
              </div>

            </div>
          <ButtonFloatTickets/>

          </div>
        </div>
  )
}

export default TournamentMain