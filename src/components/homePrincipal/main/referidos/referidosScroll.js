import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const referidosScroll = () =>{

    const videoSmoke = document.querySelector(".smokeVideo")


    function isMobile() {

        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobile()) {

        gsap.registerPlugin(ScrollTrigger); 



        const animateRefers = () => {
            gsap.to(".cortinaTop",{
                y: "-94.5%",
                duration:4,
                delay:.5,
            })
        
            gsap.to(".cortinaBottom",{
                y: "94.5%",
                duration:4,
                delay:.5,
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

    }else{
        videoSmoke.classList.remove("smoke")
    }



        
}

export default referidosScroll;