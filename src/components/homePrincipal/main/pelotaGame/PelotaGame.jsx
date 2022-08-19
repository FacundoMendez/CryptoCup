import React,{useEffect} from 'react'
import pelotaGameFunction from './pelotaGameFunction'
import "./pelotaGame.css"

const PelotaGame = () => {

/*     useEffect(() => {
        pelotaGameFunction()
    }) */

  return (

    <div>
        <div className="contenedor">

            <div className="StartGame" onClick={pelotaGameFunction}><p>Start</p></div>
            <div className="restart" ><p>Restart</p></div>

            <div className="suelo"></div>

            <img className="pelota_game " src="https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:low/v1660656670/CryptocupQatar/tickets/logoPng_ehylkn.png" alt="logo CRYPTO CUP" />

            <div className="score">0</div>

            <div className="game-over">GAME OVER</div>

        </div>

    </div>

  )
}

export default PelotaGame