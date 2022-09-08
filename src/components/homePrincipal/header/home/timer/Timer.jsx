import React,{useEffect} from 'react'
import "./timer.css"
import timerFuncional from './timerFuncional'
import {FormattedMessage} from 'react-intl';
import timerEf from "./src/timerEf.png"

const Timer = () => {

  useEffect(()=>{
    timerFuncional()
  },[])

  return (
    <div className="timer">
        <h2 className="headline">Qatar 2022</h2>

        <div id="countdown timerBox">
            <ul className="reloj">

                <li><span id="days"></span>
                  <FormattedMessage
                    id="home-days"
                    defaultMessage="Days"
                  />
                </li>

                <div className="rombo"></div>

                <li><span id="hours"></span>
                  <FormattedMessage
                    id="home-hours"
                    defaultMessage="Hours"
                  />
                </li>

                <div className="rombo"></div>

                <li><span id="minutes"></span>
                  <FormattedMessage
                    id="home-min"
                    defaultMessage="Minutes"
                  />
                </li>
{/*                 <li><span id="seconds"></span>
                  <FormattedMessage
                    id="home-seg"
                    defaultMessage="Seconds"
                  />
                </li> */}
            </ul>
        </div>

    </div>
  )
}

export default Timer