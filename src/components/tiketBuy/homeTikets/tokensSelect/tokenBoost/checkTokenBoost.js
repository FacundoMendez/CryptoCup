const checkTokenBoost = () => {
    const checkButton = document.querySelector(".btn-ticketSaleBoost ")
    const radioBox = document.querySelector(".radioTokenBoost")
    const tiketMargin = document.querySelector(".flexTickets")

    checkButton.addEventListener("click", function(){
        radioBox.classList.toggle("radioTokenBoost-active");
        if (window.matchMedia("(max-width: 380px)").matches) {
            tiketMargin.style.paddingBottom = "32rem"
          } 
    })

    checkButton.addEventListener("click", function(){
        radioBox.classList.toggle("radioTokenBoost");
    })

 

}

export default checkTokenBoost;