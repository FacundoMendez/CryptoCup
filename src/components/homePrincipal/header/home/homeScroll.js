import gsap from "gsap"
import { Timeline } from "gsap/gsap-core";

const homeScroll = () => {

        const tl = new Timeline({delay:.1, duration:.2});

        gsap.from(".navBallModel",{
            opacity:0,
            scale:.2,
        })

  /*       gsap.from(".containerHome",{
            opacity:0,
             delay:.5
        })
*/
        tl.from(".tite-home",{
            opacity:0,
            x: "-=100" , 
            duration:.4, 
        })

        tl.from(".buttonsHome",{
            opacity:-2,
            y: "-=100" , 
            duration:.4,
       
        })
        

        tl.from(".timer",{
            opacity:0,
            y: "+=100" , 
            duration:.4,
            
        })
    

}

export default homeScroll