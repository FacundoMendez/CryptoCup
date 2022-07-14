import React, {useEffect, lazy} from 'react'
import "./codigoDescuento.css"
import codigoFuncional from './codigoFuncional'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faAnglesRight} from '@fortawesome/free-solid-svg-icons'
import copyActiveFuncional from './functionsDescuento/copyActiveFuncional'
import submitActiveFuncional from './functionsDescuento/submitActiveFuncional'

const PopupErrorCodigoPropio = lazy(() => import ('./popupsErrors/codigoPropio/PopupErrorCodigoPropio'))


const CodigoDescuento = ({ referralCode, copyActive, submitCodigoDescuento, checkRefCodeValid, codigoPropio}) => {
    useEffect(() => {
        codigoFuncional()
    },[])

    if(submitCodigoDescuento){
        submitActiveFuncional()  //( hacer las conecciones para que lo ejecute una vez que valido si el cupon es correcto ) 
    }

    //en el archivo TiketBuyPage se encuentra la validacion que trae el numero de cuenta de wallet

  return (
    <div className="containerCodigoDescuento">
        <div className='boxCopyCupon'  onClick={() => {
                if(copyActive){
                    copyActiveFuncional(referralCode)  //( hacer las conecciones para que lo ejecute una vez que compro la persona y se conecto a la billetera ) 
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
                <input type="number" id='referral_code_input' />
                <button id='buttonSubmitCode' type='submit' onClick={async () => {
                    await checkRefCodeValid(document.querySelector('#referral_code_input').value);
                    }}> 
                    <FontAwesomeIcon icon={faAnglesRight} />
                 </button>                    
            </div>

            {codigoPropio   ?   
                            <PopupErrorCodigoPropio /> 
                            :  
                            null
            }
        </div>

    </div>

  )
}

export default CodigoDescuento