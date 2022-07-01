import React from 'react'
import "./footer.css"
import backFooter from "./src/Footer3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="footer">
        <img className='backFooter' src={backFooter} alt="Background Footer" />
        <div className="blurFooter"></div>
        <div className="logoFooter">
            <p>Our Social Networks</p>
            <div className="socialFooter">
                <a href="https://twitter.com/CryptoCupQatar" target="_blank" rel="noopener noreferrer" aria-label='twitter red social'><i className="twitterSocialFooter"> <FontAwesomeIcon icon={faTwitter}  />  </i>   </a>
                <a href="https://www.instagram.com/cryptocupqatar/" target="_blank" rel="noopener noreferrer" aria-label='instagram red social'><i className="instagramSocialFooter"> <FontAwesomeIcon icon={faInstagram} /> </i>    </a>
                <a href="https://t.me/cryptocup2022" target="_blank" rel="noopener noreferrer" aria-label='telegram red social'><i className="telegramSocialFooter"> <FontAwesomeIcon icon={faTelegram} /> </i>   </a>
                <a href="https://discord.gg/C3w9mR58" target="_blank" rel="noopener noreferrer" aria-label='discord red social'><i className="discordSocialFooter"> <FontAwesomeIcon icon={faDiscord} /> </i> </a>
                <a href="/" target="_blank" rel="noopener noreferrer" aria-label='youtube red social'><i className="youtubeSocialFooter"> <FontAwesomeIcon icon={faYoutube} /> </i> </a>
            </div>
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
                    <li><a href="/PrivacyPolicy "> • Terms and Conditions</a></li>
                </ul>
                <br />
                <p className='termsAndCond'>
                    ©2021-2022 Crypto Cup. All rights reserved. Crypto Cup and the Crypto Cup logo are trademarks of Crypto Cup in the U.S. and/or other countries.
                    All other trademarks are the property of their respective owners. 
                </p>

            </div>
        </div>

    </div>
  )
}

export default Footer;