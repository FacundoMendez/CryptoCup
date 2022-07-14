import React, {useEffect, lazy} from 'react'

const popupError = lazy(() => import ('./popupErrors'))

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