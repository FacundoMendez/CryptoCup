const videoBuyBoostFuncional = () => {
    const boostBuyVideo = document.querySelector(".boostBuyVideo")

    boostBuyVideo.classList.add("boostBuyVideo_active")
    
    setTimeout(function(){
        boostBuyVideo.classList.remove("boostBuyVideo_active")
    },7000)
      


}

export default videoBuyBoostFuncional;