import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const roadmapScroll = () =>{

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobile()) {

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

}

export default roadmapScroll;