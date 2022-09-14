import React,{useEffect} from 'react'
import "./timerTickets.css"
import timerFuncional from './timerFuncional'
import {FormattedMessage} from 'react-intl';

const TimerTickets = () => {

  useEffect(()=>{
    timerFuncional()
  },[])

  return (
    <div className="timer">
        <h2 className="headline_tickets">
          <FormattedMessage
            id="timerTickets_text"
            defaultMessage="Time until next batch "
          />
        </h2>

        <div id="countdown timerBox">
            <ul className="reloj">

                <li>
                  <span id="days"></span>
                  <FormattedMessage
                    id="home-days"
                    defaultMessage="Days"
                  />
                </li>

                <li>
                  <div className="rombo"></div>
                </li>

                <li>
                  <span id="hours"></span>
                  <FormattedMessage
                    id="home-hours"
                    defaultMessage="Hours"
                  />
                </li>

                <li>
                  <div className="rombo"></div>
                </li>

                <li>
                  <span id="minutes"></span>
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

export default TimerTickets