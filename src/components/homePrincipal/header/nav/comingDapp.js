const commingDapp = () => {

    const dapp = document.querySelector(".dappTitleButton")
    const comingDappButton = document.querySelector(".comingDapp")

    dapp.addEventListener("click", function(){
        comingDappButton.style.opacity = 1

        setTimeout(function(){
            comingDappButton.style.opacity = 0
        },2000)
  
    })


}

export default commingDapp; 