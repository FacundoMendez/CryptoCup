import VanillaTilt from "vanilla-tilt";

const cardsFuncional = () => {

/*     function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    } */

 /*    if (!isMobile()) { */
        VanillaTilt.init(document.querySelectorAll(".tiketImg-basic"), {
            max: 25,
            speed: 1000,
            "max-glare":1,
        });
        
        VanillaTilt.init(document.querySelectorAll(".tiketImg-boost"), {
            max: 25,
            speed: 1000,
            "max-glare":1,
        });


/*     } */
    
}




 

export default cardsFuncional