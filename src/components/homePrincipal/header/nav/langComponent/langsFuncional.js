const langsFuncional = () =>{
    const idiomasContainer = document.querySelector(".idiomasContainer")
    const radioIdiomas = document.querySelector(".radioIdiomas")

    idiomasContainer.addEventListener("click" , function() {
        radioIdiomas.classList.toggle("radioIdiomas_active")
    })

  
}

export default langsFuncional