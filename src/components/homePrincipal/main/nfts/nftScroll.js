import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const nftScroll= ()=>{

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobile()) {

        gsap.registerPlugin(ScrollTrigger); 


        gsap.from(".titleNfts",{
            scale:1.5,
            opacity:0,
            y:100,
            duration:1,
            scrollTrigger:{
                trigger: ".containerNfts",
                start: "top center",
                end: "bottom bottom",
            }
        })

        gsap.from(".textNfts",{
            opacity:0,
            delay:.6,
            duration:1,
            scrollTrigger:{
                trigger: ".containerNfts",
                start: "top center",
                end: "bottom bottom",
            }
        })


        gsap.from(".subtitleNftWinners",{
            opacity:0,
            delay:.8,
            y:300,
            duration:1,
            scrollTrigger:{
                trigger: ".containerNfts",
                start: "top center",
                end: "bottom bottom",
            }
        })


        gsap.from(".container_card",{
            opacity:0,
            delay:1,
            y:300,
            duration:1,
            scrollTrigger:{
                trigger: ".containerNfts",
                start: "top center",
                end: "bottom bottom",
            }
        })

        
        gsap.from(".subtitleNftPricePool",{
            opacity:0,
            delay:1.3,
            y:300,
            duration:1,
            scrollTrigger:{
                trigger: ".containerNfts",
                start: "top center",
                end: "bottom bottom",
            }
        })

    }
}

export default nftScroll