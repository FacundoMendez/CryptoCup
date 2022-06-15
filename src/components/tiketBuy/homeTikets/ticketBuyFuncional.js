import VanillaTilt from "vanilla-tilt";

const ticketBuyFuncional = () => {
    VanillaTilt.init(document.querySelectorAll(".imgTicket-basic"), {
        max: 25,
        speed: 1000,
        "max-glare":1,
    });
    
/*     VanillaTilt.init(document.querySelectorAll(".tiketImg-boost"), {
        max: 25,
        speed: 1000,
        "max-glare":1,
    }); */

}

export default ticketBuyFuncional;