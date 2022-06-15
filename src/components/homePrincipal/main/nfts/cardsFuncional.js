import VanillaTilt from "vanilla-tilt";

const cardsFuncional = () => {
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


    VanillaTilt.init(document.querySelectorAll(".container_card"), {
        max: 25,
        speed: 1000,
        glare:true,
        "max-glare":1,
    });

    VanillaTilt.init(document.querySelectorAll(".textRoadamp"), {
        max: 25,
        speed: 1000,
        "max-glare":1,
    });

}




 

export default cardsFuncional