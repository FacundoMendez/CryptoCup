import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const roadmapScroll = () =>{

    function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

  if (!isMobile()) {

      gsap.registerPlugin(ScrollTrigger); 

      gsap.from(".containerTitle_roadmap",{
        opacity:0,
        scrollTrigger:{
          trigger: ".containerRoadmap",
          start: "top top",
          end: "bottom bottom",
        }
      })


      gsap.from(".t1",{
        opacity:0,
        duration:.2,
        scrollTrigger:{
          trigger: ".containerTitle_roadmap",
          start: "top center",
          end: "bottom bottom",
        }
      })

      gsap.from(".t2",{
        opacity:0,
        duration:.2,
        scrollTrigger:{
          trigger: ".t1",
          start: "top end",
          end: "bottom bottom",
        }
      })


      gsap.from(".t3",{
        opacity:0,
        duration:.2,
        scrollTrigger:{
          trigger: ".t2",
          start: "top end",
          end: "bottom bottom",
        }
      })


      gsap.from(".t4",{
        opacity:0,
        duration:.2,
        scrollTrigger:{
          trigger: ".t3",
          start: "top end",
          end: "bottom bottom",
        }
      })

      
      gsap.from(".t5",{
        opacity:0,
        duration:.2,
        scrollTrigger:{
          trigger: ".t4",
          start: "top end",
          end: "bottom bottom",
        }
      })

  }

}
  

export default roadmapScroll;