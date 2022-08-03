const checkTokenBasic = () => {
    const checkButton = document.querySelector(".btn-ticketSale ")
    const boxBlurToken = document.querySelector(".boxBlurToken")
    const radio = document.querySelectorAll(".radio")
    const radioToken = document.querySelector(".radioToken")

    checkButton.addEventListener("click", function(){
        radioToken.classList.add("radioToken-active")
        boxBlurToken.classList.add("boxBlurToken_active")
    })
    
    boxBlurToken.addEventListener("click", function(){
        boxBlurToken.classList.remove("boxBlurToken_active")
        radioToken.classList.remove("radioToken-active")
    })

    for ( let i = 0; i < radio.length; i++){
        radio[i].addEventListener("click", function(){
            radioToken.classList.remove("radioToken-active")
            boxBlurToken.classList.remove("boxBlurToken_active")
        })
    }

 
    
}


    
export default checkTokenBasic;