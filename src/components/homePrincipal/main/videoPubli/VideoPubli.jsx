import React,{useEffect} from 'react'
import "./videoStyle.css"
import VideoPubliFuncional from './videoPubliFuncional'

const VideoPubli = () => {
    useEffect(() => {
        VideoPubliFuncional()
    },[])
  return (
    <div className="videoPubli-container">
        <div className="videoPubli-texts">
            <h2>WATCH THE TRAILER</h2>
        </div>
    
          <iframe className='videoPubli-video' src="https://www.youtube-nocookie.com/embed/rAYY7XTOP-U" title="Crypto Cup Qatar" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default VideoPubli