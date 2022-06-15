const idiomasFuncional = () =>{

    const idiomasContainer = document.querySelector(".idiomasContainer")
    const radioIdiomas = document.querySelector(".radioIdiomas")
    const boxEnglish = document.querySelector(".boxEnglish")
    const boxEspañol = document.querySelector(".boxEspañol")

    idiomasContainer.addEventListener("click" , function() {
        radioIdiomas.style.display = "inline-block"
        radioIdiomas.style.opacity = 1
    })

    boxEspañol.addEventListener("click", function(){
        window.location.reload();
    })
    boxEnglish.addEventListener("click", function(){
        window.location.reload();
    })
}

export default idiomasFuncional