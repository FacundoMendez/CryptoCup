import React, {useEffect} from 'react'
import noMetamaskFuncional from './noMetamaskFuncional'
const NoMetamask = ({noMetamask, textNoMetamask , chainIncorrecta , textChainIncorrecta, noBalance}) => {

    useEffect(() => {
        noMetamaskFuncional()
    },[])

  return (
    <>
    {
      noMetamask ?     
      <div className="errorNoMetamask">
        <p>{textNoMetamask}</p>
      </div>  
      :null
    }

    {
      chainIncorrecta ?     
      <div className="errorNoMetamask">
        <p>{textChainIncorrecta}</p>
      </div>  
      :null
    }

{
      noBalance ?     
      <div className="errorNoMetamask">
        <p>{noBalance}</p>
      </div>  
      :null
    }


    </>

  )
}

export default NoMetamask