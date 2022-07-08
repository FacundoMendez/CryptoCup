import React , {useState, useContext} from 'react'
import "./termsAndCondPopup.css"
import termsFuncionalAcept from './termsFuncionalAcept'
import termsFuncionalDecline from './termsFuncionalDecline'
import Context from '../../../context/Context'


const TermsAndCondicionsPopup = () => {

    
    const context = useContext(Context)

    return (
    <div className="termsAndCondicionsPopup_container">
        <div className="termsAndCondicionsPopup_popup">
            <p>By accepting you are confirming that you have read, understood and agree to Crypto Cup's <a href="/TermsAndConditions">Terms and Conditions</a> </p>
            <div className="termsAndCondicionsPopup_buttons">
                <button className="termsAndCondicionsPopup_buttons-decline" onClick={() => {
                    termsFuncionalDecline()

                    context.setCheckTerminosYCondiciones(false);
                    sessionStorage.setItem("terms and Conditions", "Decline")

                    }}>Decline</button>

                <button className="termsAndCondicionsPopup_buttons-acept" onClick={() => {

                    context.setCheckTerminosYCondiciones(true);
                    localStorage.setItem("terms and Conditions", "Acept")

                    }}>Acept</button>
            </div>
        </div>
    </div>
  )
}

export default TermsAndCondicionsPopup