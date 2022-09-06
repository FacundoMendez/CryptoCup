import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import {FormattedMessage} from 'react-intl';

const Footer = () => {
  return (
    <div className="footer">
        <img className='backFooter' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660661016/CryptocupQatar/footer/Footer3_hxey1j.webp"/* {backFooter} */ alt="Background Footer" />
        <div className="blurFooter"></div>

        <div className="boxFooter">
            <div className="logoFooter">
                <p className='titleSocialFooter'>
                    <FormattedMessage
                        id="footer-social"
                        defaultMessage="Our Social Networks"
                    />
                </p>
                <div className="socialFooter">
                    <a href="https://twitter.com/CryptoCupQatar" target="_blank" rel="noopener noreferrer" aria-label='twitter red social'><i className="twitterSocialFooter"> <FontAwesomeIcon icon={faTwitter}  />  </i>   </a>
                    <a href="https://www.instagram.com/cryptocupqatar/" target="_blank" rel="noopener noreferrer" aria-label='instagram red social'><i className="instagramSocialFooter"> <FontAwesomeIcon icon={faInstagram} /> </i>    </a>
                    <a href="https://t.me/cryptocup2022" target="_blank" rel="noopener noreferrer" aria-label='telegram red social'><i className="telegramSocialFooter"> <FontAwesomeIcon icon={faTelegram} /> </i>   </a>
                    <a href="https://discord.gg/ckFmn9xXhw" target="_blank" rel="noopener noreferrer" aria-label='discord red social'><i className="discordSocialFooter"> <FontAwesomeIcon icon={faDiscord} /> </i> </a>
                    <a href="https://www.youtube.com/channel/UCSXGLu9_OU3d5nddp-1rE5w" target="_blank" rel="noopener noreferrer" aria-label='youtube red social'><i className="youtubeSocialFooter"> <FontAwesomeIcon icon={faYoutube} /> </i> </a>
                </div>

            </div>

            <div className="emailContac">
                <p className='titleContact' >
                    <FormattedMessage
                        id="footer-contact"
                        defaultMessage="Contact"
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
  )
}

export default Footer;