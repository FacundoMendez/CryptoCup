import React, {useEffect} from 'react'
import "./termsAndCondPopup.css"
import termsFuncionalAcept from './termsFuncionalAcept'
import termsFuncionalDecline from './termsFuncionalDecline'
import checkTyc from './checkTyc'

const TermsAndCondicionsPopup = () => {
    useEffect(() => {
        checkTyc()
    })

    return (
    <div className="termsAndCondicionsPopup_container">
        <div className="termsAndCondicionsPopup_popup">
            <p>By accepting you are confirming that you have read, understood and agree to Crypto Cup's <a href="/TermsAndConditions">Terms and Conditions</a> </p>
            <div className="termsAndCondicionsPopup_buttons">
                <button className="termsAndCondicionsPopup_buttons-decline" onClick={() => termsFuncionalDecline()}>Decline</button>

                <button className="termsAndCondicionsPopup_buttons-acept" onClick={() => termsFuncionalAcept()}>Acept</button>
            </div>
        </div>
    </div>
  )
}

export default TermsAndCondicionsPopup