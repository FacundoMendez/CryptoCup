import React,{useEffect} from 'react'
import codigoIncorrecotFuncional from './codigoIncorrecotFuncional'

const CodigoIncorrecto = () => {
  
    useEffect(() => {
        codigoIncorrecotFuncional()
    },[])

    return (
        <div className="errorCodigoIncorrecto">
            <p>Invalid Code !</p>
        </div>
    )
}

export default CodigoIncorrecto