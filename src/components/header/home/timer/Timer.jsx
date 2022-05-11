import React,{useEffect} from 'react'
import "./timer.css"
import timerFuncional from './timerFuncional'

const Timer = () => {

  useEffect(()=>{
    timerFuncional()
  },[])

  return (
    <div className="timer">
        <h1 className="headline">Qatar 2022</h1>

        <div id="countdown">
            <ul className="reloj">
                <li><span id="days"></span>days</li>
                <li><span id="hours"></span>Hours</li>
                <li><span id="minutes"></span>Minutes</li>
                <li><span id="seconds"></span>Seconds</li>
            </ul>
        </div>

    </div>
  )
}

export default Timer