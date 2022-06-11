import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const tiketsScroll = () =>{

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobile()) {

        gsap.registerPlugin(ScrollTrigger); 


        gsap.from(".tiketsTitle",{
            opacity:0,
            scale:1.2,
            duration:.7,
            scrollTrigger:{
                trigger: ".containerTikets",
                start: "top center",
                end: "bottom bottom",
            }
        })

        gsap.from(".textDescripcionTikets",{
            opacity:0,
            delay:.4,
            duration:2,
            scrollTrigger:{
                trigger: ".containerTikets",
                start: "top center",
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