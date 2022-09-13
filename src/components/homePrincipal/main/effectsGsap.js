import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";

const effectsGsap = () => {

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }


    if (!isMobile()) {
        const videoSmoke = document.querySelector(".smokeVideo")

        gsap.registerPlugin(ScrollTrigger);



        /* home effects */

        const tl_home = new Timeline({delay:.1, duration:.2,  y: "+=100" , });

        gsap.from(".navBallModel",{
            opacity:0,
            scale:.2,
        })

        tl_home.from(".tite-home",{
            opacity:0,
            duration:.4, 
        })

        tl_home.from(".buttonsHome",{
            opacity:-2,
            duration:.4,
        })
        

        tl_home.from(".timer",{
            opacity:0,
            duration:.4,
            
        })


        /* effect present */


        gsap.from(".backPresentacion",{
            opacity:0,
            duration: 3,
            scrollTrigger:{
                trigger: ".boxTournament",
                start: "top center",
                end: "bottom bottom",
            }
        })

        gsap.from(".boxButtonTicketBuy",{
            y: -30,
            opacity:0,
            scrollTrigger:{
                trigger: ".boxTournament",
                start: "top center",
                end: "bottom bottom",
            }
        })

        let tl_logoPresent = new Timeline({
            scrollTrigger:{
                trigger: ".subTitlePrize",
                start: "top -100",
                end: "bottom bottom",
       
            }
        })

        tl_logoPresent.from(".logoContainer",{
                y: "+=100",
                opacity:0,
                duration:1,
        })



        /* effect tickets  */


        gsap.from(".tiketImg-basic",{
            opacity:0,
            x: -300,
            duration:1,
            rotationY:"180deg",
            scrollTrigger:{
                trigger: ".titleTicket-home-basic",
                start: "top 50%",
                end: "bottom bottom",
            }
        })

        gsap.from(".buttonBuyTicketLP_basic",{
            opacity:0,
            delay:1,
            duration:1,
            scrollTrigger:{
                trigger: ".titleTicket-home-basic",
                start: "top 50%",
                end: "bottom bottom",
            }
        })

        let tl_boost = new Timeline({
            scrollTrigger:{
                trigger: ".titleTicket-home-boost",
                start: "top 40%",
                end: "bottom bottom",
            }
        })

        gsap.from(".tiketImg-boost",{
            opacity:0,
            x:300,
            duration:1,
            rotationY:"180deg",
            scrollTrigger:{
                trigger: ".titleTicket-home-boost",
                start: "top 40%",
                end: "bottom bottom",
            }
        })

        gsap.from(".buttonBuyTicketLP_boost",{
            opacity:0,
            delay:1,
            duration:1,
            scrollTrigger:{
                trigger: ".titleTicket-home-boost",
                start: "top 40%",
                end: "bottom bottom",
            }
        })


        tl_boost.from(".star1",{
            opacity:0,
            scale:1.3,
        })

        tl_boost.from(".star2",{
            opacity:0,
            scale:1.3,
        })

        tl_boost.from(".star3",{
            opacity:0,
            scale:1.3,
        })

        tl_boost.from(".star4",{
            opacity:0,
            scale:1.3,
        })

        tl_boost.from(".text_boost_bottom",{
            opacity:0,
        })



        /* effect nfts  */


        let tl_nftsCopas = new Timeline({
            scrollTrigger:{
                trigger: ".containerWins",
                start: "top center",
                end: "bottom bottom",
            }
        })


        tl_nftsCopas.from(".rockgrande",{
            opacity:0,
            top: 200,
        })

        
        tl_nftsCopas.from(".container_card",{
            opacity:0,
            duration:1,
            y: 120,
        })
        
        tl_nftsCopas.from(".fondoRock",{
            opacity:0,
            scale:.1,
            top: 200,
        })

        gsap.to(".fugaz",{
            x: "+= 2250",
            y: "-= 500",
            delay:3,
            scrollTrigger:{
                trigger: ".tiposTorneos",
                start: "top top",
                end: "bottom bottom",
                scrub:7,
            }
        })




        /* effect token */

        gsap.to(".tokenComingSoon-left",{
            x: "+= 100",
            scrollTrigger:{
                trigger: ".tokens",
                scrub: 2,
            }
        })

        gsap.to(".tokenComingSoon-right",{
            x: "-= 100",
            scrollTrigger:{
                trigger: ".tokens",
                scrub: 2,
            }
        })


        /* effect referidos */

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


         /* effect roadmap */



         gsap.registerPlugin(ScrollTrigger); 

         gsap.from(".containerTitle_roadmap",{
           opacity:0,
           scrollTrigger:{
             trigger: ".containerRoadmap",
             start: "top top",
             end: "bottom bottom",
           }
         })
   
   
         gsap.from(".t1",{
           opacity:0,
           duration:.2,
           scrollTrigger:{
             trigger: ".containerTitle_roadmap",
             start: "top center",
             end: "bottom bottom",
           }
         })
   
         gsap.from(".t2",{
           opacity:0,
           duration:.2,
           scrollTrigger:{
             trigger: ".t1",
             start: "top end",
             end: "bottom bottom",
           }
         })
   
   
         gsap.from(".t3",{
           opacity:0,
           duration:.2,
           scrollTrigger:{
             trigger: ".t2",
             start: "top end",
             end: "bottom bottom",
           }
         })
   
   
         gsap.from(".t4",{
           opacity:0,
           duration:.2,
           scrollTrigger:{
             trigger: ".t3",
             start: "top end",
             end: "bottom bottom",
           }
         })
   
         
         gsap.from(".t5",{
           opacity:0,
           duration:.2,
           scrollTrigger:{
             trigger: ".t4",
             start: "top end",
             end: "bottom bottom",
           }
         })
   


        /* effect vidoe publi */


        gsap.registerPlugin(ScrollTrigger); 


        gsap.from(".videoPubli-texts",{
            opacity:0,
            duration:.7,
            scrollTrigger:{
                trigger: ".videoPubli-container",
                start: "top center",
                end: "bottom bottom",
            }
        })

        gsap.from(".videoPubli-video",{
            opacity:0,
            delay:.3,
            duration:1,
            scrollTrigger:{
                trigger: ".videoPubli-container",
                start: "top center",
                end: "bottom bottom",
            }
        })

    }
}

export default effectsGsap;