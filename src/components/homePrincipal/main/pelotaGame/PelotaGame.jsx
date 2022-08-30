import React from 'react'
import pelotaGameFunction from './pelotaGameFunction'
import "./pelotaGame.css"

const PelotaGame = () => {

    let scoreMax = localStorage.getItem("scoreMax")

  return (

    <div>
        <div className="contenedor">

            <div className="StartGame" onClick={pelotaGameFunction}><p>Start</p></div>
            <div className="restart" ><p>Restart</p></div>

            <div className="suelo"></div>

            <img className="pelota_game " src="https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:low/v1660656670/CryptocupQatar/tickets/logoPng_ehylkn.webp" alt="logo CRYPTO CUP" />

            <div className="score">0</div>

            <div className="scoreMax">
              <p>Score Max: <span className='topScore'>{scoreMax}</span> </p>
            </div>

            <div className="game-over">GAME OVER</div>

        </div>

    </div>

  )
}

export default PelotaGame