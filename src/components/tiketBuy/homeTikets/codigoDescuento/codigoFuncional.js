const codigoFuncional = () => {
    const hereClick = document.querySelector(".hereClick")
    const containerInputCupon = document.querySelector(".containerInputCupon")

    hereClick.addEventListener("click", function(){
        containerInputCupon.classList.add("containerInputCupon_active")
    })


}

export default codigoFuncional;