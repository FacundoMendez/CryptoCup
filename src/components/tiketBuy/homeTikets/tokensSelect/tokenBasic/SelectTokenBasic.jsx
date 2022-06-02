import React,{useState, useEffect} from 'react'
import checkTokenBasic from './checkTokenBasic'

import busdLogo from "../../src/busdLogo.png"
import daiLogo from "../../src/daiLogo.png"
import usdcLogo from "../../src/usdcLogo.png"
import usdtLogo from "../../src/usdtLogo.png"

const SelectTokenBasic = () => {

    const [activeBasic, setActiveBasic ] = useState(1)
  
    useEffect(() => {
        checkTokenBasic()
    },[])

  return (
      
    <div className="wrapperBotton-ticketSale ">

        <div className="btn-ticketSale" >
            {activeBasic === 1 ? <img className='imgTokenSelect' src={usdcLogo} alt="BusdToken" /> : null}
            {activeBasic === 2 ? <img className='imgTokenSelect' src={usdtLogo} alt="DaiToken" /> : null}
            {activeBasic === 3 ? <img className='imgTokenSelect' src={busdLogo} alt="UsdcToken" /> : null}
            {activeBasic === 4 ? <img className='imgTokenSelect' src={daiLogo} alt="UsdtToken" /> : null}

            <span className="BorderTopBottom-ticketSale  "></span>
            <span className="BorderLeftRight-ticketSale  "></span>
            
            <div className="radioToken">

                <label className="radio control-radio">
                    <img className='LogoToken' src={usdcLogo} alt="Logo Dai" />
                    <p>USDC</p>
                    <input type="radio" value="option1-basic" readOnly={true} name="radioBasic" checked={activeBasic === 1} onClick={() => setActiveBasic(1)}/>
                    <div className="control_indicator"></div>
                </label>

                <label className="radio control-radio">
                    <img className='LogoToken' src={usdtLogo} alt="Logo Dai" />
                    <p>USDT</p>
                    <input type="radio" value="option2-basic" readOnly={true} name="radioBasic" checked={activeBasic === 2} onClick={() => setActiveBasic(2)}  />
                    <div className="control_indicator"></div>
                </label>
                
                <label className="radio control-radio">
                    <img className='LogoToken' src={busdLogo} alt="Logo Dai" />
                    <p>BUSD</p>
                    <input type="radio" value="option3-basic" readOnly={true} name="radioBasic" checked={activeBasic === 3} onClick={() => setActiveBasic(3)} />
                    <div className="control_indicator"></div>
                </label>
                
                <label className="radio control-radio">
                    <img className='LogoToken' src={daiLogo} alt="Logo Dai" />
                    <p>DAI</p>
                    <input type="radio" value="option4-basic" readOnly={true} name="radioBasic" checked={activeBasic === 4} onClick={() => setActiveBasic(4)} />
                    <div className="control_indicator"></div>
                </label>
            </div>
        </div>
    </div>
  )
}

export default SelectTokenBasic