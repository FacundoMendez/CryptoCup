const termsFuncionalAcept = () => {

    const termsContainer= document.querySelector(".termsAndCondicionsPopup_container")

    termsContainer.style.opacity = 0

    setTimeout(function(){
        termsContainer.style.display = "none"
    },1000)


}

export default termsFuncionalAcept; 