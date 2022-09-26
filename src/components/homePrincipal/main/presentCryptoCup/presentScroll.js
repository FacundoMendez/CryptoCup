import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Timeline } from "gsap/gsap-core";

const tournamentScroll = () =>{

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobile()) {

        
    gsap.registerPlugin(ScrollTrigger);
 
        let tl_present = new Timeline({
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


        let tl_logoPresent = new Timeline({
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

export default tournamentScroll;