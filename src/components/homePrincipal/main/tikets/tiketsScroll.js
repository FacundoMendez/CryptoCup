import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";
import ScrollTrigger from 'gsap/ScrollTrigger';

const tiketsScroll = () =>{

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobile()) {

        gsap.registerPlugin(ScrollTrigger);


        /* basic */

        
        let tl_basic_text = new Timeline({
            scrollTrigger:{
                trigger: ".containerTikets",
                start: "top 50%",
                end: "bottom bottom",
            }
        })
        
        tl_basic_text.from(".textTikets",{
            opacity:0,
        })

        let tl_basic = new Timeline({
            scrollTrigger:{
                trigger: ".titleTicket-home-basic",
                start: "top 50%",
                end: "bottom bottom",
            }
        })

        
        tl_basic.from(".titleTicket-home-basic",{
            opacity:0,
        })
        
        tl_basic.from(".textoTicket-home",{
            opacity:0,
        })

        gsap.from(".tiketImg-basic",{
            opacity:0,
            x: -300,
            duration:1,
            rotationY:"180deg",
            scrollTrigger:{
                trigger: ".titleTicket-home-basic",
                start: "top 50%",
                end: "bottom bottom",
            }
        })

        gsap.from(".buttonBuyTicketLP_basic",{
            opacity:0,
            delay:1,
            duration:1,
            scrollTrigger:{
                trigger: ".titleTicket-home-basic",
                start: "top 50%",
                end: "bottom bottom",
            }
        })

        /* boot */

        let tl_boost = new Timeline({
            scrollTrigger:{
                trigger: ".titleTicket-home-boost",
                start: "top 40%",
                end: "bottom bottom",
            }
        })

        gsap.from(".tiketImg-boost",{
            opacity:0,
            x:300,
            duration:1,
            rotationY:"180deg",
            scrollTrigger:{
                trigger: ".titleTicket-home-boost",
                start: "top 40%",
                end: "bottom bottom",
            }
        })

        gsap.from(".buttonBuyTicketLP_boost",{
            opacity:0,
            delay:1,
            duration:1,
            scrollTrigger:{
                trigger: ".titleTicket-home-boost",
                start: "top 40%",
                end: "bottom bottom",
            }
        })

        tl_boost.from(".titleTicket-home-boost",{
            opacity:0,
        })

        tl_boost.from(".text_boost_top",{
            opacity:0,
        })


        tl_boost.from(".star1",{
            opacity:0,
            duration:.3,
            scale:1.3,
        })

        tl_boost.from(".star2",{
            opacity:0,
            scale:1.3,
            duration:.3,

        })

        tl_boost.from(".star3",{
            opacity:0,
            scale:1.3,
            duration:.3,

        })


        tl_boost.from(".text_boost_bottom",{
            opacity:0,
        })

    }

}

export default tiketsScroll;