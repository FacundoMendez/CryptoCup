const presaleFunctional = () => {
    const radio_token_presale = document.querySelector(".radio_token_presale")
    const box_tokens_presale = document.querySelector(".box_tokens_presale")
    const LogoToken = document.querySelectorAll(".input_radio_presale")
    let amountTokens_presale = document.getElementById('amountTokens_presale')
    const box_buy_presale = document.querySelector(".box_buy_presale");
    

    box_tokens_presale.addEventListener("click" , function() {
        radio_token_presale.classList.toggle("radio_token_presale_active")
    })

    for ( let i = 0; i < LogoToken.length; i++){
        LogoToken[i].addEventListener("click", function(){
            radio_token_presale.classList.toggle("radio_token_presale_active")
        })
    }


    box_buy_presale.addEventListener("click" , function() {
        
        console.log(amountTokens_presale.value)

        if(amountTokens_presale.value > 5000){
            amountTokens_presale.value=5000
        }
        if(amountTokens_presale.value < 20){
            amountTokens_presale.value= 10
        }
    })

}

export default presaleFunctional;