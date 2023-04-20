import React, {useState, useEffect} from 'react'
import pelotaGameFunction from './pelotaGameFunction'
import "./pelotaGame.css"
import {FormattedMessage} from 'react-intl';


const PelotaGame = () => {

    let scoreMax = localStorage.getItem("scoreMax")

    const [isPlay , setIsPlay] = useState(false)

    const handlerPlay = () => {
      setIsPlay(!isPlay)
    }


      if(isPlay){
        pelotaGameFunction()
      }


  return (

    <div>
        <div className="contenedor">

            <div className="StartGame" onClick={handlerPlay}>
              <p>
                <FormattedMessage
                  id="game-start"
                  defaultMessage="Start"
                />
              </p>
            </div>
            <div className="restart" >
              <p>
                <FormattedMessage
                  id="game-restart"
                  defaultMessage="Restart"
                />
              </p>
            </div>

            <div className="suelo"></div>

            <img className="pelota_game " src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_500,q_auto:best,w_500/v1660656597/CryptocupQatar/present/Logo_br3xr2.png" alt="logo CRYPTO CUP" />

            <div className="score">0</div>

            <div className="scoreMax">
              <p>
                <FormattedMessage
                  id="game-scoreMax"
                  defaultMessage="Score Max: "
                />
                <span className='topScore'>{scoreMax}</span> </p>
            </div>

            <div className="game-over">
                <FormattedMessage
                  id="game-gameOver"
                  defaultMessage="GAME OVER "
                />
            </div>

        </div>

    </div>

  )
}

export default PelotaGame