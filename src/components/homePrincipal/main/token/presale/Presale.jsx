import React ,{useState, useEffect} from 'react'
import NavTicket from '../../../../tiketBuy/NavTickets/NavTickets'
import TimerPresaleToken from '../timerPresaleToken/TimerPresaleToken'
import ConnectPresale from './connectPresale/ConnectPresale'
import "./presale.css"


const Presale = () => {

    const [accumulated , setAccumulated] = useState(100000)       //cantidad en $ 
    const [porcentaje , setPorcentaje] = useState("0")      //cantidad en %

    const [connect , setConnect] = useState(true)

	const [style, setStyle] = useState({})

    useEffect(() => {
		const newStyle = {
			opacity: 1,
			width: `${porcentaje}%`
		}
        setStyle(newStyle);

    },[porcentaje])


  return (
    <div className="containerPresale">
        <NavTicket/>
        <div className="boxPresale">
            
            <h2>Public Sale 1</h2>
            <h3>Start in:</h3>
            <TimerPresaleToken/>

            <div className="box_cct">
                <p> <strong>1 CCT =</strong> &nbsp; 0.0038 USDT</p>
                <p><strong>USDT Raised:</strong> &nbsp;  {accumulated} / 972.000 USDT</p>
            </div>


            <div className="progress">
            
            <div className="soft_cap_progress"></div>
            <div className="soft_hard_progress"></div>
                <div className="progress-done" style={style}>
                    <p>{porcentaje}%</p>
                </div>
            </div>

            <div className="soft">
                <p><strong>Soft Cap: </strong>&nbsp; 50.000 USDT</p>
                <p className='hard_cap' ><strong>Hard Cap:</strong>&nbsp;  972.000 USDT</p>
            </div>

            <p className='user_buy_wallet'><strong>Capped FCFS with Parcel Limit:</strong>&nbsp; &nbsp; Min buy 20$ - Max 5000$ </p>

            {connect ? 
                <ConnectPresale/>
                :
                <div className="connect">
                    <p>Connect</p>
                </div>
            }
        </div>
    </div>
    
  )
}

export default Presale