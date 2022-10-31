import VanillaTilt from "vanilla-tilt";

const effectTicket = () => {

     function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    } 

    if (!isMobile()) { 
        VanillaTilt.init(document.querySelectorAll(".boxTickets"), {
            max: 25,
            speed: 1000,
            "max-glare":1,
        });
        


   } 
    
}




 

export default effectTicket