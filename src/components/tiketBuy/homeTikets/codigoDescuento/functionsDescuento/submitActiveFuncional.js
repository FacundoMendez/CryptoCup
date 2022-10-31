

const submitActiveFuncional = () =>{


    const boxPrinceBoost = document.querySelector(".boxPrinceBoost")
    const imagenBanDescuentBoost = document.querySelector(".imagenBanDescuentoBoost")
    const boxPriceBoostDescuento = document.querySelector(".boxPriceBoostDescuento")
    const priceBoost = document.querySelector(".priceBoostOrigin")

    imagenBanDescuentBoost.classList.add("imagenBanDescuentoBoost_active")
    boxPriceBoostDescuento.classList.add("boxPriceBoostDescuento_active")
    priceBoost.classList.add("priceBoost_active")
    boxPrinceBoost.classList.add("boxPrinceBoost_active")
}

export default submitActiveFuncional;