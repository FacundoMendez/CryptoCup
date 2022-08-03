const checkTokenBoost = () => {
    const checkButton = document.querySelector(".btn-ticketSaleBoost ")
    const boxBlurToken = document.querySelector(".boxBlurTokenBoost")
    const radio = document.querySelectorAll(".radio")
    const radioToken = document.querySelector(".radioTokenBoost")

    checkButton.addEventListener("click", function(){
        radioToken.classList.add("radioTokenBoost-active")
        boxBlurToken.classList.add("boxBlurTokenBoost_active")
    })

    boxBlurToken.addEventListener("click", function(){
        boxBlurToken.classList.remove("boxBlurTokenBoost_active")
        radioToken.classList.remove("radioTokenBoost-active")
    })

    for ( let i = 0; i < radio.length; i++){
        radio[i].addEventListener("click", function(){
            radioToken.classList.remove("radioTokenBoost-active")
            boxBlurToken.classList.remove("boxBlurTokenBoost_active")
        })
    }

 

}

export default checkTokenBoost;