const checkTokenBasic = () => {
    const checkButton = document.querySelector(".btn-ticketSale ")
    const radioBox = document.querySelector(".radioToken")
/*     const radioBoxActive = document.querySelector(".radioToken-active")
    let indicador = document.getElementsByClassName("control_indicator") */
    
    checkButton.addEventListener("click", function(){
        radioBox.classList.toggle("radioToken-active");
    })

    checkButton.addEventListener("click", function(){
        radioBox.classList.toggle("radioToken");
    })

/*     for (var i = 0; i < indicador.length; i++) {
        indicador[i].addEventListener("click", function(){
            radioBox.classList.toggle("radioToken");
        })
    } */
 

}


    
export default checkTokenBasic;