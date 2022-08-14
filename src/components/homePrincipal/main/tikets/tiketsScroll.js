import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";
import { Circ } from "gsap";
import { Power0 } from "gsap";
import { Elastic } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const tiketsScroll = () =>{

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    const pelota = document.querySelector(".pelota")

    function ballBounce() {

        var tl = new Timeline();
  
        tl
  
          .to(".pelota", 0.5, {
          y: 0,
          ease: Circ.easeOut,
          force3D: true,
        }, "bounce")
  
        .to(".pelota", 0.4, {
          y: 140,
          ease: Circ.easeIn
        }, "bounce2")


      }


    pelota.addEventListener("click" , function(){
        ballBounce()
    })

    if (!isMobile()) {

        gsap.registerPlugin(ScrollTrigger);

        ballBounce()

        

      gsap.to(".pelota",{
            x: 1800 ,
            rotate: "+=2080",
            duration:20,
            scrollTrigger:{
                trigger: ".containerTikets",
                start: "100% 450px",
                end: "+=650",
                scrub: 7,
            }
        })

        gsap.from(".tiketsTitle",{
            opacity:0,
            scale:1.2,
            duration:.7,
            scrollTrigger:{
                trigger: ".containerTikets",
                start: "top 60%",
                end: "bottom bottom",
            }
        })

        gsap.from(".textDescripcionTikets",{
            opacity:0,
            delay:.4,
            duration:2,
            scrollTrigger:{
                trigger: ".containerTikets",
                start: "top 50%",
                end: "bottom bottom",
            }
        })

        
        gsap.from(".titleTicket-home-basic",{
            opacity:0,
            delay:.2,
            duration:2,
            scrollTrigger:{
                trigger: ".boxTickets-Home-basic",
                start: "top center",
                end: "bottom bottom",
            }
        })

        gsap.from(".titleTicket-home-boost",{
            opacity:0,
            delay:.2,
            duration:2,
            scrollTrigger:{
                trigger: ".boxTickets-Home-boost",
                start: "top center",
                end: "bottom bottom",

            }
        })
        
        gsap.from(".textoTicket-home",{
            opacity:0,
            delay:.5,
            duration:2,
            scrollTrigger:{
                trigger: ".boxTickets-Home-basic",
                start: "top center",
                end: "bottom bottom",
            }
        })


        gsap.from(".tiketImg-basic",{
            opacity:0,
            x:300,
            duration:1,
            rotationY:"180deg",
            scrollTrigger:{
                trigger: ".boxTickets-Home-basic",
                start: "top center",
                end: "bottom bottom",
            }
        })

        gsap.from(".tiketImg-boost",{
            opacity:0,
            x: -300,
            duration:1,
            rotationY:"180deg",
            scrollTrigger:{
                trigger: ".boxTickets-Home-boost",
                start: "top center",
                end: "bottom bottom",
            }
        })
        

    }

}

export default tiketsScroll;