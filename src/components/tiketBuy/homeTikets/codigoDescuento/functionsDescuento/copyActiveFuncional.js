const copyActiveFuncional = (code) => {

    const copyWallet = document.getElementById("copyWallet").select()
    const boxCopy = document.querySelector(".copy")
    const boxCopyCupon = document.querySelector(".boxCopyCupon")
 
    copyValue("https://cryptocupqatar.io/tickets?r=" + code.toString());

    boxCopy.classList.add("copy_active")
    boxCopyCupon.classList.add("boxCopyCupon_active")
    
    setTimeout(function(){
        boxCopy.classList.remove("copy_active")
        boxCopyCupon.classList.remove("boxCopyCupon_active")
    },1000)

    return copyWallet;

}

const copyValue = (code) => {
    navigator.clipboard.writeText(code)
}

export default copyActiveFuncional;