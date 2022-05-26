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

        <div className="boxRoadmpa">
          <div className="line-Container">
              <div className="q1">
                <div className="line-q1"> 
                  <div className="q1-title">
                      <h4>
                        Q1 2021
                      </h4>
                    <div className="listQ1">
                      <ul>
                        <li>- Concept Design ✓</li>
                        <li>- Branding and game research ✓</li>
                        <li>- Tournament concept ✓</li>
                        <li>- Art design ✓</li>
                        <li>- Ladders System idea ✓</li>
                        <li>- Web footage selection ✓</li>
                        <li>- Development environment setup ✓</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

              <div className="q2">
                <div className="line-q2"> 
                    <div className="q2-title">
                      <h4>
                        Q2 2022
                      </h4>
                      <div className="listQ2">
                        <ul>
                          <li>- Smart contracts development ✓</li>
                          <li>- NFTs Illustrations and 3D Models ✓</li>
                          <li>- Official launch of the website ✓</li>
                          <li>- Investor selection process ✓</li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="q3">
                <div className="line-q3"> 
                    <div className="q3-title">
                      <h4>
                        Q3 2022
                      </h4>
                      <div className="listQ3">
                        <ul>
                          <li>- Whitepaper creation ✓</li>
                          <li>- Ticket Sales </li>
                          <li>- Private sale </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="q4">
                <div className="line-q4"> 
                    <div className="q4-title">
                      <h4>
                        Q4 2022
                      </h4>
                      <div className="listQ4">
                        <ul>
                          <li>- Token public presale 1</li>
                          <li>- Token public presale 2</li>
                          <li>- DAPP launching</li>
                          <li>- Ladders System development</li>
                          <li>- Release Gameplay PDF</li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="q5">
                  <div className="line-q5"> 
                      <div className="q5-title">
                        <h4>
                          Q5 2022
                        </h4>
                        <div className="listQ5">
                          <ul>
                            <li>- Playable Ladders System Release</li>
                            <li>- Tournament starts</li>
                            <li>- Prize pool distribution</li>
                            <li>- Marketplace</li>
                          </ul>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Roadmap