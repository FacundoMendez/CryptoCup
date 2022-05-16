import React, {useEffect} from 'react'
import "./roadmap.css"
import roadmapScroll from './roadmapScroll'

const Roadmap = () => {

  useEffect(()=>{
    roadmapScroll()
  },[])
  
  return (
    <div id='roadmap' className="containerRoadmap">
        <div className="titleContainers roadmapTitle">
          <h2>ROADMAP</h2>
        </div>
    </div>
  )
}

export default Roadmap