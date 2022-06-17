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

        gsap.from(".container_card",{
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



        gsap.to(".imgPrizePoolBasic",{
            opacity:1,
            scale:1,
            delay:.1,
            duration:2,
            scrollTrigger:{
                trigger: ".prizepool",
                start: "top center",
                end: "bottom bottom",
            }
        })
        /* gsap.from(".textToken",{
            opacity:0,
            delay:.3,
            duration:2,
            scrollTrigger:{
                trigger: ".tokens",
                start: "top center",
                end: "bottom bottom",
            }
        })


        gsap.to(".tokenWebGl",{
            opacity:1,
            scale:1,
            delay:.3,
            duration:2,
            scrollTrigger:{
                trigger: ".tokens",
                start: "top center",
                end: "bottom bottom",
            }
        }) */
    }

}

export default nftScroll