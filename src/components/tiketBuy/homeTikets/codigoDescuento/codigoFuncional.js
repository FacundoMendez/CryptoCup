const codigoFuncional = () => {
    const hereClick = document.querySelector(".hereClick")
    const containerInputCupon = document.querySelector(".containerInputCupon")
    const input = document.getElementById("referral_code_input")
    const buttonInput = document.getElementById("buttonSubmitCode")
    const errorCodigoVacio = document.querySelector(".errorCodigoVacio")
    

    hereClick.addEventListener("click", function(){
        containerInputCupon.classList.add("containerInputCupon_active")
    })

    buttonInput.addEventListener("click", function(){
        if (input.value === 0) {
            errorCodigoVacio.classList.add("errorCodigoVacio_active")
            setTimeout(function(){
                errorCodigoVacio.classList.remove("errorCodigoVacio_active")
            },2500)
        }
    })

}

export default codigoFuncional;