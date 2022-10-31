import React from 'react'
import "./codigoDescuento.css"
/* import codigoFuncional from './codigoFuncional' */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy} from '@fortawesome/free-solid-svg-icons'
import copyActiveFuncional from './functionsDescuento/copyActiveFuncional'
import submitActiveFuncional from './functionsDescuento/submitActiveFuncional'
import {FormattedMessage} from 'react-intl';

const CodigoDescuento = ({connected,referralCode, copyActive, submitCodigoDescuento , checkRefCodeValid }) => {


    if(submitCodigoDescuento && connected){
        submitActiveFuncional()   
    }



  return (
    <div className="containerCodigoDescuento">
        <div className='boxCopyCupon'  onClick={() => {
                if(copyActive){
                    copyActiveFuncional(referralCode)  
                }
            }}>
            <p className='copy'>
                <FontAwesomeIcon icon={faCopy} />
            </p>
            <div className="containerCopy">
                <div className="triangle"></div>
                {copyActive ? 
                    <p className='text2Copy'>
                        <FormattedMessage
                            id="ticketBuy-hoverCopy"
                            defaultMessage=" Click to copy your invitation link into clipboard!"
                        />
                    </p> 
                    : 
                    <p className='text1Copy'>
                        <FormattedMessage
                            id="ticketBuy-hoverCopy2"
                            defaultMessage="Buy your Ticket and get your Referral Code!"
                        />
                    </p>}
            </div>
        </div>
        
    </div>

  )
}

export default CodigoDescuento