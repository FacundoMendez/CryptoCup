import React, {useEffect} from 'react'
import tokenModel from './tokenModel'
import "./token.css"
import TitlesContainers from '../TitlesContainers'

const TokenMain = () => {

    useEffect(()=>{
        tokenModel()
    },[])

  return (
    <div id="tokens" className="tokens">

        <TitlesContainers  title="TOKEN"/>

        <div className="containerToken">
    
            <div className="textToken">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque neque minima ab ipsa animi impedit quo earum, et placeat fugit. Modi quidem ut nemo a impedit praesentium distinctio illum.</p>
            </div>

            <canvas className='tokenWebGl'></canvas>

        </div>


    </div>
  )
}

export default TokenMain