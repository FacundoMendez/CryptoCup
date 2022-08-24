import React,{useEffect} from 'react'
import effectParticle from './effectParticle'
import "./effectStyle.css"

const EffectParticles = () => {

    useEffect(() => {
        effectParticle()
    },[])

  return (
    <div className='containerParticle'>
        <canvas id='star-particle'></canvas>
    </div>
  )
}

export default EffectParticles