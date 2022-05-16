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
                <a href="/" target="_blank" rel="noopener noreferrer"><i className="twitterSocial"> <FontAwesomeIcon icon={faTwitter} /> </i>  Twitter </a>
                <a href="/" target="_blank" rel="noopener noreferrer"><i className="instagramSocial"> <FontAwesomeIcon icon={faInstagram} /> </i>  Instagram  </a>
                <a href="/" target="_blank" rel="noopener noreferrer"><i className="telegramSocial"> <FontAwesomeIcon icon={faTelegram} /> </i> Telegram  </a>
                <a href="/" target="_blank" rel="noopener noreferrer"><i className="discordSocial"> <FontAwesomeIcon icon={faDiscord} /> </i>Discord </a>
            </div>

        </>
    );

}

export default Social;