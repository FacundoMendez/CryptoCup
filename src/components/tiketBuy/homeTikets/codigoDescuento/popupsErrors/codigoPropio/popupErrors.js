
const popupError = () => {
    const errorCuponPropio = document.querySelector(".errorCuponPropio")
    const input = document.getElementById("referral_code_input")


    if ( 0 < (parseInt(input.value) )) {
        errorCuponPropio.classList.add("errorCuponPropio_active")
        
        setTimeout(function(){
        errorCuponPropio.classList.remove("errorCuponPropio_active")
        },3000)
    }
    
}

export default popupError;