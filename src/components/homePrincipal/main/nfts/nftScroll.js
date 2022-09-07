import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Timeline } from "gsap/gsap-core";

const nftScroll= ()=>{

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobile()) {

        gsap.registerPlugin(ScrollTrigger); 


        let tl_nfts = new Timeline({
            scrollTrigger:{
                trigger: ".containerNfts",
                start: "top center",
                end: "bottom bottom",
            }
        })



        tl_nfts.from(".titleNfts",{
            opacity:0,
            y:100,
        })

        tl_nfts.from(".textNfts",{
            opacity:0,
        })


        let tl_nftsCopas = new Timeline({
            scrollTrigger:{
                trigger: ".containerWins",
                start: "top center",
                end: "bottom bottom",
            }
        })

        tl_nftsCopas.from(".subtitleNftWinners",{
            opacity:0,
        })

        tl_nftsCopas.from(".textCardsNft",{
            opacity:0,
        })


        tl_nftsCopas.from(".container_card",{
            opacity:0,
            duration:1,
            y: 100,
        })

        gsap.from(".rockIz",{
            duration:2,
            opacity:0,
            scale:2,
            scrollTrigger:{
                trigger: ".tiposTorneos",
                start: "top 10%",
                end: "bottom bottom",
            }
        })

        gsap.from(".rockDer",{
            opacity:0,
            duration:2,
            scale:2,
            scrollTrigger:{
                trigger: ".tiposTorneos",
                start: "top 10%",
                end: "bottom bottom",
            }
        })

        gsap.from(".fondoRock",{
            opacity:0,
            duration:2,
            scale:0,
            scrollTrigger:{
                trigger: ".tiposTorneos",
                start: "top 10%",
                end: "bottom bottom",
            }
        })
        
     
        

    }
}

export default nftScroll