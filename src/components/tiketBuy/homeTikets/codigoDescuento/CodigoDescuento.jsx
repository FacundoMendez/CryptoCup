import React, {useEffect, useState} from 'react'
import "./codigoDescuento.css"
import codigoFuncional from './codigoFuncional'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faAnglesRight} from '@fortawesome/free-solid-svg-icons'

import copyActiveFuncional from './functionsDescuento/copyActiveFuncional'

const CodigoDescuento = () => {
    useEffect(() => {
        codigoFuncional()
    },[])

    const [copyActive , setCopyActive] = useState(true) //modificar a false (true para pruebas)

    //en el archivo TiketBuyPage se encuentra la validacion que trae el numero de cuenta de wallet

  return (
    <div className="containerCodigoDescuento">
        <div className='boxCopyCupon'  onClick={() => {
                if(copyActive){
                    copyActiveFuncional()  //( hacer las conecciones para que lo ejecute una vez que compro la persona y se conecto a la billetera ) 
                }
            }}>
            <p className='copy'>
                <FontAwesomeIcon icon={faCopy} />
            </p>
            <div className="containerCopy">
                <div className="triangle"></div>
                <p className='text1Copy'>You can invite users with your invitation link!</p>
                <p className='text2Copy'>Click to copy your invitation link into clipboard!</p>
            </div>
        </div>
        <div className="containerHereCupon">
            <p>Do you have a referral code? put it <span className='hereClick'>HERE</span> </p>

            <div className="containerInputCupon">
                <input type="text" />
                <button type='submit'> 
                    <FontAwesomeIcon icon={faAnglesRight} />
                 </button>
            </div>
        </div>

    </div>

  )
}

export default CodigoDescuento