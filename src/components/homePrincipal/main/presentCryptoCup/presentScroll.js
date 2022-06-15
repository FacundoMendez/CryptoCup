import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const tournamentScroll = () =>{

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobile()) {
        gsap.registerPlugin(ScrollTrigger); 


        gsap.from(".tournamentTitle",{
            opacity:0,
            scale:1.5,
            duration:.8,
            scrollTrigger:{
                trigger: ".boxTournament",
                start: "top center",
                end: "bottom bottom",
            }
        })
    
        gsap.from(".subTitlePrize",{
            opacity:0,
            delay:.5,
            duration:2,
            scrollTrigger:{
                trigger: ".boxTournament",
                start: "top center",
                end: "bottom bottom",
            }
        })
    
    
        gsap.from(".logoContainer",{
            opacity:0,
            delay:1,
            y: 100,
            duration:2.5,
            scrollTrigger:{
                trigger: ".boxTournament",
                start: "top center",
                end: "bottom bottom",
            }
        })

    }
   
}

export default tournamentScroll;