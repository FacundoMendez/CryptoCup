const submitActiveFuncional = () =>{

    const imagenBanDescuento = document.querySelector(".imagenBanDescuento")
    const boxPriceBasicDescuento = document.querySelector(".boxPriceBasicDescuento")
    const priceBasic = document.querySelector(".priceBasic")

    imagenBanDescuento.classList.add("imagenBanDescuento_active")
    boxPriceBasicDescuento.classList.add("boxPriceBasicDescuento_active")
    priceBasic.classList.add("priceBasic_active")


    
    const imagenBanDescuentBoost = document.querySelector(".imagenBanDescuentoBoost")
    const boxPriceBoostDescuento = document.querySelector(".boxPriceBoostDescuento")
    const priceBoost = document.querySelector(".priceBoost")

    imagenBanDescuentBoost.classList.add("imagenBanDescuentoBoost_active")
    boxPriceBoostDescuento.classList.add("boxPriceBoostDescuento_active")
    priceBoost.classList.add("priceBoost_active")
}

export default submitActiveFuncional;