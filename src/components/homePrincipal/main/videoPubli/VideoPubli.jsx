import React  from 'react'
import "./videoStyle.css"
import {FormattedMessage} from 'react-intl';

const VideoPubli = () => {

  return (
    <div className="videoPubli-container">
        <div className="videoPubli-texts">
            <h2>
                <FormattedMessage
                    id="trailer-title"
                    defaultMessage="WATCH THE TRAILER"
                  />
              </h2>
        </div>
        <iframe className='videoPubli-video' src="https://www.youtube-nocookie.com/embed/vrJ90nxTGl4" title="Crypto Cup Qatar" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default VideoPubli