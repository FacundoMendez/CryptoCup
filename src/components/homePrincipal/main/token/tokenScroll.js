import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const tokenScroll = () =>{

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobile()) {

        gsap.registerPlugin(ScrollTrigger); 


        gsap.from(".tokenTitle",{
            opacity:0,
            duration:.7,
            scrollTrigger:{
                trigger: ".tokens",
                start: "top center",
                end: "bottom bottom",
            }
        })

        gsap.from(".textToken",{
            opacity:0,
            delay:.3,
            duration:2,
            scrollTrigger:{
                trigger: ".tokens",
                start: "top center",
                end: "bottom bottom",
            }
        })


/*         gsap.to(".tokenWebGl",{
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

        gsap.to(".tokenVideo",{
            opacity:1,
            scale:1,
            delay:.3,
            duration:2,
            scrollTrigger:{
                trigger: ".tokens",
                start: "top center",
                end: "bottom bottom",
            }
        })


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


    }

        
}

export default tokenScroll;