import gsap from "gsap"
import { Timeline } from "gsap/gsap-core";

const homeScroll = () => {

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobile()) {


    /*    let tl = gsap.timeline({ duration: 1,  opacity:1,}); */
        const tl = new Timeline({delay:.3, duration:.2});


        tl.to(".containerHome",{
            opacity:1,
        })


        gsap.to(".navBallModel",{
            opacity:1,
            scale:1,
            duration:1.2,
            delay:.5
        })


        tl.to(".tite-home",{
            opacity:1,
            x: "+= 55",
            duration:.6
        })

        tl.to(".buttonsHome",{
            opacity:1,
            duration:.5,
            x: "+= 10",
        })
        

        tl.to(".timer",{
            opacity:1,
            duration:.4,
            x: "+= 10",
        })

        
    }

}

export default homeScroll