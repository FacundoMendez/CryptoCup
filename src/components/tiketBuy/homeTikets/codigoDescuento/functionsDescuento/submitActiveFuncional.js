const submitActiveFuncional = () =>{

    const imagenBanDescuento = document.querySelector(".imagenBanDescuento")
    const boxPriceBasicDescuento = document.querySelector(".boxPriceBasicDescuento")
    const priceBasic = document.querySelector(".priceBasic")
    const boxPrinceBasic = document.querySelector(".boxPrinceBasic")

    imagenBanDescuento.classList.add("imagenBanDescuento_active")
    boxPriceBasicDescuento.classList.add("boxPriceBasicDescuento_active")
    priceBasic.classList.add("priceBasic_active")
    boxPrinceBasic.classList.add("boxPrinceBasic_active")


    const boxPrinceBoost = document.querySelector(".boxPrinceBoost")
    const imagenBanDescuentBoost = document.querySelector(".imagenBanDescuentoBoost")
    const boxPriceBoostDescuento = document.querySelector(".boxPriceBoostDescuento")
    const priceBoost = document.querySelector(".priceBoost")

    imagenBanDescuentBoost.classList.add("imagenBanDescuentoBoost_active")
    boxPriceBoostDescuento.classList.add("boxPriceBoostDescuento_active")
    priceBoost.classList.add("priceBoost_active")
    boxPrinceBoost.classList.add("boxPrinceBoost_active")

}

export default submitActiveFuncional;