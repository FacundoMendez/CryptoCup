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

          <iframe className='videoPubli-video' src="https://www.youtube-nocookie.com/embed/rAYY7XTOP-U?controls=0" title="Crypto Cup Qatar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default VideoPubli