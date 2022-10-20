import React, {useEffect , useState} from 'react'
import presaleFunctional from '../presaleFunctional'


const ConnectPresale = ({ buyTokens }) => {

    const [tokenOptionSelect, setTokenOptionSelect] = useState(4)

    useEffect(() => {
        presaleFunctional()
    },[])

  return (
    <div className="nav_buy_presale">
        <div className="box_tokens_presale">
            <div className="select_token_presale" >
                {tokenOptionSelect === 3 ? <img className='imgTokenSelect' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdcLogo_iz6l8u_kf6qgl.png"/* {usdcLogo} */ alt="usdc Logo" /> : null}
                {tokenOptionSelect === 4 ? <img className='imgTokenSelect' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdtLogo_crllfx_uyuhcp.png"/* {usdtLogo} */ alt="usdt Logo" /> : null}
                {tokenOptionSelect === 2 ? <img className='imgTokenSelect' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/busdLogo_fmii68_iraojc.png"/* {busdLogo} */ alt="busd Logo" /> : null}
                {tokenOptionSelect === 1 ? <img className='imgTokenSelect' src=  "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/daiLogo_k9yreu_qlhlzd.png"/* {daiLogo} */ alt="dai Logo" /> : null}
            </div>
            <div className="radio_token_presale">
                <label  className="control_radio_presale">
                    <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdtLogo_crllfx_uyuhcp.png"/* {usdtLogo} */ alt="Logo Dai" />
                    <p>USDT</p>
                    <input className='input_radio_presale' type="radio" value="option1" readOnly={true}  checked={tokenOptionSelect === 4} onClick={() => setTokenOptionSelect(4)}  />
                </label>
                <label className="control_radio_presale">
                    <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdcLogo_iz6l8u_kf6qgl.png"/* {usdcLogo} */ alt="Logo Dai" />
                    <p>USDC</p>
                    <input className='input_radio_presale' type="radio" value="option2" readOnly={true} checked={tokenOptionSelect === 3} onClick={() => setTokenOptionSelect(3)}/>
                </label>
                <label className="control_radio_presale">
                    <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/busdLogo_fmii68_iraojc.png"/* {busdLogo} */ alt="Logo Dai" />
                    <p>BUSD</p>
                    <input className='input_radio_presale' type="radio" value="option3" readOnly={true}  checked={tokenOptionSelect === 2} onClick={() => setTokenOptionSelect(2)} />
                </label>
                <label className="control_radio_presale">
                    <img className='LogoToken' src=  "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/daiLogo_k9yreu_qlhlzd.png"/* {daiLogo}  */alt="Logo Dai" />
                    <p>DAI</p>
                    <input className='input_radio_presale' type="radio" value="option4" readOnly={true} checked={tokenOptionSelect === 1} onClick={() => setTokenOptionSelect(1)} />
                </label>
            </div>
        </div>
        <div className="box_amount_presale">
            <input id='amountTokens_presale' type="number" max={5000} min={5} placeholder="AMOUNT" />
        </div>
        <div className="box_buy_presale" onClick={() => {
            const amount = document.getElementById('amountTokens_presale').value
            buyTokens(amount, tokenOptionSelect - 1)
        }} >
            <p>BUY</p>
        </div>
    </div>

  )
}

export default ConnectPresale