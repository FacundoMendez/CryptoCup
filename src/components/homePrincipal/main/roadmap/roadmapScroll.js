import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const roadmapScroll = () =>{

    gsap.registerPlugin(ScrollTrigger); 


    gsap.from(".roadmapTitle",{
        opacity:0,
        scale:1.5,
        duration:1.3,
        scrollTrigger:{
            trigger: ".containerRoadmap",
            start: "top center",
            end: "bottom bottom",
        }
    })


    

}

export default roadmapScroll;