import gsap from "gsap"
import { Timeline } from "gsap/gsap-core";

const homeScroll = () => {

        const tl = new Timeline({delay:.1, duration:.2,  y: "+=100" , });

        gsap.from(".navBallModel",{
            opacity:0,
            scale:.2,
        })

    /*     gsap.from(".containerPrincipalHome",{
            opacity:-4,
            delay:0,
        }) */

        tl.from(".tite-home",{
            opacity:0,
            duration:.4, 
        })

        tl.from(".buttonsHome",{
            opacity:-2,
            duration:.4,
        })
        

        tl.from(".timer",{
            opacity:0,
            duration:.4,
            
        })
    

}

export default homeScroll