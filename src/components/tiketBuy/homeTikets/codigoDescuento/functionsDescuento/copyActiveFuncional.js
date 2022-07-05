const copyActiveFuncional = () => {
    const copyWallet = document.getElementById("copyWallet2").select()
    const boxCopy = document.querySelector(".copy")
    const boxCopyCupon = document.querySelector(".boxCopyCupon")

    document.execCommand("copy"); 

    boxCopy.classList.add("copy_active")
    boxCopyCupon.classList.add("boxCopyCupon_active")

    setTimeout(function(){
        boxCopy.classList.remove("copy_active")
        boxCopyCupon.classList.remove("boxCopyCupon_active")
    },1000)





    return copyWallet

}

export default copyActiveFuncional;