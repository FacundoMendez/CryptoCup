import React, {useEffect} from 'react'
import noMetamaskFuncional from './noMetamaskFuncional'
const NoMetamask = () => {

    useEffect(() => {
        noMetamaskFuncional()
    },[])

  return (
    <div className="errorNoMetamask">
        <p>Please Install Metamask!</p>
    </div>  
  )
}

export default NoMetamask