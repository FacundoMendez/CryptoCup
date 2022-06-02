const checkTokenBoost = () => {
    const checkButton = document.querySelector(".btn-ticketSaleBoost ")
    const radioBox = document.querySelector(".radioTokenBoost")

    checkButton.addEventListener("click", function(){
        radioBox.classList.toggle("radioTokenBoost-active");
    })

    checkButton.addEventListener("click", function(){
        radioBox.classList.toggle("radioTokenBoost");
    })


}

export default checkTokenBoost;