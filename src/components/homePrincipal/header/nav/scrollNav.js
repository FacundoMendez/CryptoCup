import $ from "jquery"

const navScroll= () =>{
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $(".tournamentContainer").offset();
        contenido2 = contenido2.top;
        if(windowHeight >= (contenido2 /1.5)  ){
            $(".nav").css("backgroundColor", "black");
        }else{
            $(".nav").css("backgroundColor", " transparent");
        }

        if(windowHeight >= (contenido2 /4.5)  ){
            $(".social").css("opacity", 0);
            $(".social").css("visibility", "hidden");
        }else{
            $(".social").css("opacity", 1);
            $(".social").css("visibility", "visible");
        }
    });

}

export default navScroll;
