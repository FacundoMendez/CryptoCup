import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import {FormattedMessage} from 'react-intl';

const Footer = () => {
  return (
    <div className="footer">
        <div className="blurFooter"></div>
        <div className="circuloMovimiento">
            <div className="socialFooter">
                <a href="https://twitter.com/CryptoCupQatar" target="_blank" rel="noopener noreferrer" aria-label='twitter red social'><i className="twitterSocialFooter"> <FontAwesomeIcon icon={faTwitter}  />  </i> Twitter  </a>
                <a href="https://www.instagram.com/cryptocupqatar/" target="_blank" rel="noopener noreferrer" aria-label='instagram red social'><i className="instagramSocialFooter"> <FontAwesomeIcon icon={faInstagram} /> </i> Instagram  </a>
                <a href="https://t.me/cryptocup2022" target="_blank" rel="noopener noreferrer" aria-label='telegram red social'><i className="telegramSocialFooter"> <FontAwesomeIcon icon={faTelegram} /> </i> Telegram  </a>
                <a href="https://discord.gg/ckFmn9xXhw" target="_blank" rel="noopener noreferrer" aria-label='discord red social'><i className="discordSocialFooter"> <FontAwesomeIcon icon={faDiscord} /> </i> Discord </a>
            </div> 
        </div>

        <div className="boxBottomFotter">


            <div className="emailContac">
                <p className='titleContact' >
                    <FormattedMessage
                        id="footer-contact"
                        defaultMessage="Contact:"
                    />
                </p>
                <a href="mailto:cryptocup2022@gmail.com">
                    <p className='email' >
                        <FormattedMessage
                            id="footer-email"
                            defaultMessage="Cryptocup2022@gmail.com "
                        />
                    </p>
                </a> 
            </div>


            <div className="terms">
                <div className='listTerms'>
                    <ul>
                        <li>
                            <a href="TermsAndConditions" >
                                <FormattedMessage
                                    id="footer-tyc"
                                    defaultMessage="• Terms and Conditions"
                                />
                            </a>
                        </li>
                    </ul>
                    <br />
                </div>
            </div>


            <p className='termsAndCond'>
                Copyright © 2022. All Rights Reserved by CryptoCupQatar
            </p> 
            
        </div>
    </div>
  )
}

export default Footer;