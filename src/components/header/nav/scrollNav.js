import $ from "jquery"

const navScroll= () =>{
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $(".tournamentContainer").offset();
        contenido2 = contenido2.top;
        if(windowHeight >= (contenido2 /1.5)  ){
            $(".nav").css("backgroundColor", "black");
            $(".nav").css("justifyContent", "flex-end");

        }else{
            $(".nav").css("backgroundColor", " rgba(0, 0, 0, 0.014)");

            
        }
    });

}

export default navScroll;
