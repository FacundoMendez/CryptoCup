import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const VideoPubliFuncional = () => {
    gsap.registerPlugin(ScrollTrigger); 


    gsap.from(".videoPubli-texts",{
        opacity:0,
        scale:1.5,
        duration:.7,
        scrollTrigger:{
            trigger: ".videoPubli-container",
            start: "top center",
            end: "bottom bottom",
        }
    })

    gsap.from(".videoPubli-video",{
        opacity:0,
        scale:1.1,
        delay:.3,
        duration:1,
        scrollTrigger:{
            trigger: ".videoPubli-container",
            start: "top center",
            end: "bottom bottom",
        }
    })


}

export default VideoPubliFuncional;