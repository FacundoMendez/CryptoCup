import React, {useEffect} from 'react'
import "./codigoDescuento.css"
import codigoFuncional from './codigoFuncional'

const CodigoDescuento = () => {
    useEffect(() => {
        codigoFuncional()
    },[])

  return (
    <div className="containerCodigoDescuento">
{/*         <div className='boxCopyCupon'>
            <p className='copy'>copy</p>
            <div className="containerCopy">
                <div className="triangle"></div>
                <p className='text1Copy'>You can invite users with your invitation link!</p>
                <p className='text2Copy'>Click to copy your invitation link into clipboard!</p>
            </div>
        </div>
        <div className="containerHereCupon">
            <p>Do you have a referral code? put it <span>HERE</span> </p>

            <div className="containerInputCupon">
                <input type="text" />
                <button type='submit'> ok  </button>
            </div>
        </div>
 */}
    </div>

  )
}

export default CodigoDescuento