import gsap from "gsap"
import { Timeline } from "gsap/gsap-core";

const homeScroll = () => {




    /*    let tl = gsap.timeline({ duration: 1,  opacity:1,}); */
        const tl = new Timeline({delay:.3, duration:.2});


        tl.from(".containerHome",{
            opacity:-1,
        })



        gsap.from(".navBallModel",{
            opacity:0,
            scale:.2,
            duration:1.2,
            delay:.5
        })


        tl.from(".tite-home",{
            opacity:0,
            x: "-=100" , 
            duration:.6
        })

        tl.from(".buttonsHome",{
            opacity:0,
            x: "-=100" , 
            duration:.5,
        })
        

        tl.from(".timer",{
            opacity:0,
            x: "-=100" , 
            duration:.4,
        })
        

        

}

export default homeScroll