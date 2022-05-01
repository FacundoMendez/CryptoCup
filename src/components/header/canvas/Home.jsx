import React,{useEffect} from 'react'
import backgroundPresentacion from './scene'
import "./scene.css"

const Home = () => {

    useEffect(()=>{
        backgroundPresentacion()
    },[])

  return (
    <div className='scene'>
        <div className="textPresent">
          <h1>CRYPTO CUP <br /> 2022</h1>
          <p>A new way to play and feel in live the exaltation of the world cup. Help your country to win gambling with us and loosing all your funds and giving all to us, because we want all your money, see you bro.</p>
        </div>
        <canvas className='webGl'></canvas>
    </div>
  )
}

export default Home