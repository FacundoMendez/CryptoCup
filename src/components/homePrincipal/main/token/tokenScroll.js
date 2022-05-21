import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const tokenScroll = () =>{

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
    })


}

export default tokenScroll;