const checkTyc = () => {
    
    const termsContainer= document.querySelector(".termsAndCondicionsPopup_container")

    let checkTerminos = localStorage.getItem("terms and Conditions")

    console.log(checkTerminos)

    if (checkTerminos ==='Acept') {
        termsContainer.style.display = "none"
        sessionStorage.removeItem("terms and Conditions")
    } 

}
export default checkTyc;