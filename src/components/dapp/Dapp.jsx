import React,{useEffect} from 'react'
import "./dapp.css"
import timerFuncionalDapp from './dappFuncional'

const Dapp = () => {

  useEffect(() => {
    timerFuncionalDapp()

    setTimeout(function(){
      window.location.href = '/'; 
   }, 6000);
  },[])

  return (
    <div className="containerDapp">
        <div className="timerDapp">
            <h1 className="headlineDapp">Qatar 2022</h1>

            <div id="countdownDapp">
                <ul className="relojDapp">
                    <li><span id="daysDapp"></span>days</li>
                    <li><span id="hoursDapp"></span>Hours</li>
                    <li><span id="minutesDapp"></span>Minutes</li>
                    <li><span id="secondsDapp"></span>Seconds</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Dapp