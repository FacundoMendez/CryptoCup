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
            scale:1.5,
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


        
    /* referidos */

/*     gsap.to(".boxContainerPin_referidos",{
        duration:2,
        delay:1.5,
        scrollTrigger:{
            trigger: ".boxContainerPin_referidos",
            start: "top top",
            end: "+= 100%",
            pin:"true"
        }
    }) */

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".boxContainerPin_referidos",
          pin: ".boxContainerPin_referidos",
          start: "50% 50%",
          end: "bottom bottom",
          pinSpacing: false,
          scrub:5
        }
    })

    gsap.to(".cortinaTop",{
        y: "-= 760",
        duration:4,
        delay:3.5,
        scrollTrigger:{
            trigger: ".boxContainerPin_referidos",
            start: "20% 20%",
            scrub: 2,
        }
    })
    
    gsap.to(".cortinaBottom",{
        y: "+= 750",
        duration:4,
        delay:3.5,
        scrollTrigger:{
            trigger: ".boxContainerPin_referidos",
            start: "20% 20%",
            scrub: 2,
        }
    })

    tl.to(".boxReferidos_t",{
        duration:2,
        delay:3.5,
        opacity:2,
   
    })

    }

        
}

export default tokenScroll;