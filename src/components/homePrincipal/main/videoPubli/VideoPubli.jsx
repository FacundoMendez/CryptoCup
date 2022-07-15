import React,{useEffect} from 'react'
import "./videoStyle.css"
import videoPromocional from "./src/videoPromocional.mp4"
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
        <div className="videoPubli-video">
            <video className='videoPromocional' preload='none' src={videoPromocional} controls muted  ></video>
        </div>
    </div>
  )
}

export default VideoPubli