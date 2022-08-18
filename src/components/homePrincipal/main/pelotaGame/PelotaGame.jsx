import React,{useEffect} from 'react'
import pelotaGameFunction from './pelotaGameFunction'
import "./pelotaGame.css"
import pelotaLogo from "./src/pelotaLogo.png"

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

            <img className="pelota_game " src={pelotaLogo} alt="logo CRYPTO CUP" />

            <div className="score">0</div>

            <div className="game-over">GAME OVER</div>

        </div>

    </div>

  )
}

export default PelotaGame