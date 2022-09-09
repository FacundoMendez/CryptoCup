import React , {useContext} from 'react'
import "./termsAndCondPopup.css"
import Context from '../../../context/Context'


const TermsAndCondicionsPopup = () => {

    
    const context = useContext(Context)

    return (
    <div className="termsAndCondicionsPopup_container">
        <div className="termsAndCondicionsPopup_popup">
            <p>We use cookies and other similar technologies to improve your experience on our service. For more details, you can consult our Cookies Policy and Privacy Policy. <a href="/termsAndConditions">Terms And Conditions.</a> </p>
            <div className="termsAndCondicionsPopup_buttons">
                <button className="termsAndCondicionsPopup_buttons-acept" onClick={() => {

                    context.setCheckTerminosYCondiciones(true);
                    localStorage.setItem("terms and Conditions", "Accept")

                    }}>Accept</button>
            </div>
        </div>
    </div>
  )
}

export default TermsAndCondicionsPopup