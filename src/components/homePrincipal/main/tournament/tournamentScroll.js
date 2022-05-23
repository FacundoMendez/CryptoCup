import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const tournamentScroll = () =>{

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

    gsap.from(".subTitleNft",{
        opacity:0,
        delay:.9,
        duration:2,
        scrollTrigger:{
            trigger: ".boxTournament",
            start: "top center",
            end: "bottom bottom",
        }
    })

    gsap.from(".tiposTorneos",{
        opacity:0,
        delay:1,
        duration:2.5,
        scrollTrigger:{
            trigger: ".boxTournament",
            start: "top center",
            end: "bottom bottom",
        }
    })
}

export default tournamentScroll;