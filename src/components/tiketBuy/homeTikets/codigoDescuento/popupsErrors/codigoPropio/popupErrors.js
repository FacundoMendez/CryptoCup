const popupError = () => {
    const errorCuponPropio = document.querySelector(".errorCuponPropio")

    errorCuponPropio.classList.add("errorCuponPropio_active")
    
    setTimeout(function(){
       errorCuponPropio.classList.remove("errorCuponPropio_active")
    },3000)
      


}

export default popupError;