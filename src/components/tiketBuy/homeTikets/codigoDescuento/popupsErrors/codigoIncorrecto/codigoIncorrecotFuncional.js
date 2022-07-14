const codigoIncorrecotFuncional = () => {
    const errorCodigoIncorrecto = document.querySelector(".errorCodigoIncorrecto")

    errorCodigoIncorrecto.classList.add("errorCodigoIncorrecto_active")
    
    setTimeout(function(){
        errorCodigoIncorrecto.classList.remove("errorCodigoIncorrecto_active")
    },6000)
}

export default codigoIncorrecotFuncional;