const checkTokenBasic = () => {
    const checkButton = document.querySelector(".btn-ticketSale ")
    const radioBox = document.querySelector(".radioToken")

    checkButton.addEventListener("click", function(){
        radioBox.classList.toggle("radioToken-active");
    })
    
}


    
export default checkTokenBasic;