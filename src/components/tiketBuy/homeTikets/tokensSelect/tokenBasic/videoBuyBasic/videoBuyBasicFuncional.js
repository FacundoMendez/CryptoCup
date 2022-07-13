const videoBuyBasicFuncional = () => {
    const basicBuyVideo = document.querySelector(".basicBuyVideo")

    basicBuyVideo.classList.add("basicBuyVideo_active")
    
    setTimeout(function(){
        basicBuyVideo.classList.remove("basicBuyVideo_active")
    },7000)
      


}

export default videoBuyBasicFuncional;