import React from "react";
import "./social.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"

function Social() {

    return(
        <>
            <div className="social">
                <a href="https://twitter.com/CryptoCupQatar" target="_blank" rel="noopener noreferrer"><i className="twitterSocial"> <FontAwesomeIcon icon={faTwitter} /> </i>  Twitter </a>
                <a href="https://www.instagram.com/cryptocupqatar/" target="_blank" rel="noopener noreferrer"><i className="instagramSocial"> <FontAwesomeIcon icon={faInstagram} /> </i>  Instagram  </a>
                <a href="https://t.me/cryptocup2022" target="_blank" rel="noopener noreferrer"><i className="telegramSocial"> <FontAwesomeIcon icon={faTelegram} /> </i> Telegram  </a>
                <a href="https://discord.gg/C3w9mR58" target="_blank" rel="noopener noreferrer"><i className="discordSocial"> <FontAwesomeIcon icon={faDiscord} /> </i>Discord </a>
            </div>

            <div className="socialMobile">
                <a href="https://twitter.com/CryptoCupQatar" target="_blank" rel="noopener noreferrer"><i className="twitterSocial"> <FontAwesomeIcon icon={faTwitter} /> </i>  </a>
                <a href="https://www.instagram.com/cryptocupqatar/" target="_blank" rel="noopener noreferrer"><i className="instagramSocial"> <FontAwesomeIcon icon={faInstagram} /> </i>   </a>
                <a href="https://t.me/cryptocup2022" target="_blank" rel="noopener noreferrer"><i className="telegramSocial"> <FontAwesomeIcon icon={faTelegram} /> </i>  </a>
                <a href="https://discord.gg/C3w9mR58" target="_blank" rel="noopener noreferrer"><i className="discordSocial"> <FontAwesomeIcon icon={faDiscord} /> </i> </a>
            </div>

        </>
    );

}

export default Social;