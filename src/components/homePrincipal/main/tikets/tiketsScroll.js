import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const tiketsScroll = () =>{

    gsap.registerPlugin(ScrollTrigger); 


    gsap.from(".tiketsTitle",{
        opacity:0,
        scale:1.5,
        duration:1.3,
        scrollTrigger:{
            trigger: ".containerTikets",
            start: "top center",
            end: "bottom bottom",
        }
    })

    gsap.from(".textDescripcionTikets",{
        opacity:0,
        delay:.9,
        duration:2,
        scrollTrigger:{
            trigger: ".containerTikets",
            start: "top center",
            end: "bottom bottom",
        }
    })

    gsap.from(".tiketImg",{
        opacity:0,
        delay:1.1,
        y:300,
        duration:2,
        scrollTrigger:{
            trigger: ".containerTikets",
            start: "top center",
            end: "bottom bottom",
        }
    })

    gsap.from(".ballModel",{
        opacity:0,
        delay:.2,
        x:-300,
        y:300,
        duration:1,
        scrollTrigger:{
            trigger: ".containerTikets",
            start: "top center",
            end: "bottom bottom",
        }
    })

}

export default tiketsScroll;