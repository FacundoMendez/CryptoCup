import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const tokenScroll = () =>{

    gsap.registerPlugin(ScrollTrigger); 


    gsap.from(".tokenTitle",{
        opacity:0,
        scale:1.5,
        duration:1.3,
        scrollTrigger:{
            trigger: ".tokens",
            start: "top center",
            end: "bottom bottom",
        }
    })

    gsap.from(".textToken",{
        opacity:0,
        delay:.9,
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
        delay:.8,
        duration:2,
        scrollTrigger:{
            trigger: ".tokens",
            start: "top center",
            end: "bottom bottom",
        }
    })


}

export default tokenScroll;