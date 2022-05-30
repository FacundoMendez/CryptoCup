import React from 'react'
import "./footer.css"
import backFooter from "./src/Footer3.jpg"

const Footer = () => {
  return (
    <div className="footer">
        <img className='backFooter' src={backFooter} alt="Background Footer" />
        <div className="blurFooter"></div>
        <div className="logoFooter">
            <p>Crypto Cup</p>
        </div>

{/*         <div className="listNav">
            <ul>
                <li><a href="/home"> • Home</a></li>
                <li><a href="/home"> • Tickets</a></li>
                <li><a href="/home"> • Whitepaper</a></li>
            </ul>
        </div> */}

        <div className="terms">
            <div className='listTerms'>
                <ul>
                    <li><a href="/home"> • Privacy Policy</a></li>
                    <li><a href="/home"> • Terms and Conditions </a></li>
                    <li><a href="/home"> • Cookie Policy </a></li>
                    <li><a href="/home"> • Legal Notices </a></li>
                </ul>
                <br />
                <p className='termsAndCond'>
                    ©2002-2016 Crypto Cup. All rights reserved. Crypto Cup and the Crypto Cup logo are trademarks of Crypto Cup in the U.S. and/or other countries.
                    All other trademarks are the property of their respective owners. 
                </p>

            </div>
        </div>

    </div>
  )
}

export default Footer;