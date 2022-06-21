import React,{useEffect} from 'react'
import "./dapp.css"
import timerFuncionalDapp from './dappFuncional'
import Timer from '../homePrincipal/header/home/timer/Timer'

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
          <Timer />
        </div>
    </div>
  )
}

export default Dapp