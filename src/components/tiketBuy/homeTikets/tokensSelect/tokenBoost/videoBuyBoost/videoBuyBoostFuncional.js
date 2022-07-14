const videoBuyBoostFuncional = () => {
    const boostBuyVideo = document.querySelector(".boostBuyVideo")

    boostBuyVideo.classList.toggle("boostBuyVideo_active")
    
    setTimeout(function(){
        boostBuyVideo.classList.remove("boostBuyVideo_active")
    },8000)
      


}

export default videoBuyBoostFuncional;