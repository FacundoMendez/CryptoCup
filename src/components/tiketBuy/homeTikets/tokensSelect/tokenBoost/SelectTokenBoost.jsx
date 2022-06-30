import React,{useState, useEffect} from 'react'
import checkTokenBoost from './checkTokenBoost'
import busdLogo from "../../src/busdLogo.png"
import daiLogo from "../../src/daiLogo.png"
import usdcLogo from "../../src/usdcLogo.png"
import usdtLogo from "../../src/usdtLogo.png"

const SelectTokenBoost = () => {

    const [activeBoost, setActiveBoost ] = useState(1)
  
    useEffect(() => {
        checkTokenBoost()
    },[])

  return (
      
    <div className="wrapperBotton-ticketSale-boost ">

        <div className="btn-ticketSaleBoost" >
            {activeBoost === 1 ? <img className='imgTokenSelect' src={usdcLogo} alt="BusdToken" /> : null}
            {activeBoost === 2 ? <img className='imgTokenSelect' src={usdtLogo} alt="DaiToken" /> : null}
            {activeBoost === 3 ? <img className='imgTokenSelect' src={busdLogo} alt="UsdcToken" /> : null}
            {activeBoost === 4 ? <img className='imgTokenSelect' src={daiLogo} alt="UsdtToken" /> : null}

            <span className="BorderTopBottom-ticketSale  "></span>
            <span className="BorderLeftRight-ticketSale  "></span>
            
            <div className="radioTokenBoost">

                <label className="radio control-radio">
                    <img className='LogoToken' src={usdcLogo} alt="Logo Dai" />
                    <p>USDC</p>
                    <input type="radio" value="option1-boost" readOnly={true} name="radioBoost" checked={activeBoost === 1} onClick={() => setActiveBoost(1)}/>
                    <div className="control_indicator"></div>
                </label>

                <label className="radio control-radio">
                    <img className='LogoToken' src={usdtLogo} alt="Logo Dai" />
                    <p>USDT</p>
                    <input type="radio" value="option2-boost" readOnly={true} name="radioBoost" checked={activeBoost === 2} onClick={() => setActiveBoost(2)}  />
                    <div className="control_indicator"></div>
                </label>
                
                <label className="radio control-radio">
                    <img className='LogoToken' src={busdLogo} alt="Logo Dai" />
                    <p>BUSD</p>
                    <input type="radio" value="option3-boost" readOnly={true} name="radioBoost" checked={activeBoost === 3} onClick={() => setActiveBoost(3)} />
                    <div className="control_indicator"></div>
                </label>
                
                <label className="radio control-radio">
                    <img className='LogoToken' src={daiLogo} alt="Logo Dai" />
                    <p>DAI</p>
                    <input type="radio" value="option4-boost" readOnly={true} name="radioBoost" checked={activeBoost === 4} onClick={() => setActiveBoost(4)} />
                    <div className="control_indicator"></div>
                </label>
            </div>
        </div>
    </div>
  )
}

export default SelectTokenBoost