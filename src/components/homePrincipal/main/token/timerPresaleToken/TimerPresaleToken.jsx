import React, {useEffect} from 'react'
import { FormattedMessage } from 'react-intl';
import "./timer_TokenPresale.css"

const TimerPresaleToken = () => {
  
    useEffect(() => {
        const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear()
        
            today = mm + "/" + dd + "/" + yyyy;

        //end
        const countDown = new Date(1667174400000).getTime(),
            x = setInterval(function() {    

                const now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById("days_TokenPresale").innerText = Math.floor(distance / (day))
                document.getElementById("hours_TokenPresale").innerText = Math.floor((distance % (day)) / (hour))
                document.getElementById("minutes_TokenPresale").innerText = Math.floor((distance % (hour)) / (minute))
                document.getElementById("seconds_TokenPresale").innerText = Math.floor((distance % (minute)) / second);

                //seconds
            }, 0)
    }, [])
  
  
    return (
        <div className="timer_presale">

          <div id="timerBox">
              <ul className="reloj_tokenPresale">

                <li>
                  <span id="days_TokenPresale"></span>
                  <FormattedMessage
                    id="home-days"
                    defaultMessage="Days"
                  />
                </li>

                <li>
                  <span id="hours_TokenPresale"></span>
                  <FormattedMessage
                    id="home-hours"
                    defaultMessage="Hours"
                  />
                </li>

                <li>
                  <span id="minutes_TokenPresale"></span>
                  <FormattedMessage
                    id="home-min"
                    defaultMessage="Minutes"
                  />
                </li>

                <li><span id="seconds_TokenPresale"></span>
                  <FormattedMessage
                    id="home-seg"
                    defaultMessage="Seconds"
                  />
                </li>
            </ul>
        </div>

    </div>
  )
}

export default TimerPresaleToken