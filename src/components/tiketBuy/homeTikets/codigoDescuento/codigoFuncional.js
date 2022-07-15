const codigoFuncional = () => {
    const hereClick = document.querySelector(".hereClick")
    const containerInputCupon = document.querySelector(".containerInputCupon")
    const input = document.getElementById("referral_code_input")
    const buttonInput = document.getElementById("buttonSubmitCode")
    const errorCodigoVacio = document.querySelector(".errorCodigoVacio")
    const errorNoConnectWallet = document.querySelector(".errorNoConnectWallet")

    hereClick.addEventListener("click", function(){
        containerInputCupon.classList.add("containerInputCupon_active")
    })

    buttonInput.addEventListener("click", function(){

        if (isNaN(parseInt(input.value))) { /* error de codigo vacio */
            errorCodigoVacio.classList.add("errorCodigoVacio_active")
            setTimeout(function(){
                errorCodigoVacio.classList.remove("errorCodigoVacio_active")
            },2500)
        }else{ /* error de wallet no connectada */
            errorNoConnectWallet.classList.add("errorNoConnectWallet_active")
            setTimeout(function(){
                errorNoConnectWallet.classList.remove("errorNoConnectWallet_active")
            },3000)
        }
    })

}

export default codigoFuncional;