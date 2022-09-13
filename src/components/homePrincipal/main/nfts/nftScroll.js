import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Timeline } from "gsap/gsap-core";

const nftScroll= ()=>{

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobile()) {

        gsap.registerPlugin(ScrollTrigger); 


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
    }
}

export default nftScroll