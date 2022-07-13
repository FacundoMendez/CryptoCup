import React, {useEffect} from 'react'
import popupError from './popupErrors'

const PopupErrorCodigoPropio = () => {
  
  useEffect(() => {
    popupError()
  },[])
  
  return (
    <div className="errorCuponPropio">
        <p>You cannot use your own Referral Code</p>
    </div>  
  )
}

export default PopupErrorCodigoPropio