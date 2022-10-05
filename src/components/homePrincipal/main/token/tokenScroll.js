import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Timeline } from "gsap/gsap-core";

const tokenScroll = () =>{

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobile()) {

        gsap.registerPlugin(ScrollTrigger); 

        let tl_token = new Timeline({
            scrollTrigger:{
                trigger: ".tokens",
                start: "top 50%",
                end: "bottom bottom",
            }
        })

        tl_token.from(".tokenTitle" , {
            opacity:0,
        })

        tl_token.from(".boxText_token" , {
            opacity:0,
        })
        tl_token.from(".t_1" , {
            opacity:0,
        })
        tl_token.from(".t_2" , {
            opacity:0,
        })
        tl_token.from(".mark_token" , {
            opacity:0,
        })


        let tl_token2 = new Timeline({
            scrollTrigger:{
                trigger: ".containerToken",
                start: "top 50%",
                end: "bottom bottom",
            }
        })

        tl_token2.from(".tokenWebGl" , {
            opacity:0,
            scale:0,
            duration:1.5
        })

        tl_token2.from(".top_left_line" , {
            duration:.5,
            opacity:0,
        })
        tl_token2.from(".box_left_token_prediction" , {
            duration:.5,
            opacity:0,
        })

        tl_token2.from(".bottom_left_line" , {
            duration:.5,
            opacity:0,
        })
        tl_token2.from(".box_text_left_bottom" , {
            duration:.5,
            opacity:0,
        })


        tl_token2.from(".top_right_line" , {
            duration:.5,
            opacity:0,
        })
        tl_token2.from(".box_text_right_top" , {
            duration:.5,
            opacity:0,
        })
        tl_token2.from(".bottom_right_line" , {
            opacity:0,
            duration:.5,
        })
        tl_token2.from(".box_text_right_bottom" , {
            duration:.5,
            opacity:0,
        })

        tl_token2.from(".comment_token" , {
            opacity:0,
        })

    }

        
}

export default tokenScroll;