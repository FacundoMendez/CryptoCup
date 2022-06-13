import React, {useEffect} from 'react'
import "./roadmap.css"
import roadmapScroll from './roadmapScroll'

const Roadmap = () => {

  useEffect(()=>{
    roadmapScroll()
  },[])
  
  return (
    <div id='roadmap' className="containerRoadmap">
      <section className="intro">
        <div className="container">
          <h1>ROADMAP</h1>
        </div>
      </section>

      <section className="timeline">
        <div className='iniTimeline'></div>
        <ul>
          <li>
            <div className='textRoadamp'>
              <time>Q1 2021</time>
              <p>
              - Concept Design <span>✓</span><br/>
              - Branding and game research <span>✓</span> <br/>
              - Tournament concept <span>✓</span> <br/>
              - Art design <span>✓</span> <br/>
              - Ladders System idea <span>✓</span> <br/>
              - Web footage selection <span>✓</span> <br/>
              - Development environment setup <span>✓</span><br/>
            </p>
            </div>
          </li>
          <li>
          <div className='textRoadamp'>
              <time>Q2 2022</time> 
              <p>
                - Smart contracts development <span>✓</span> <br/>
                - NFTs Illustrations and 3D Models <span>✓</span> <br/>
                - Official launch of the website <span>✓</span>  <br/>
                - Investor selection process <span>✓</span><br/>
              </p>
            </div>
          </li>
          <li>
            <div className='textRoadamp'>
              <time>Q3 2022</time> 
              <p>
                - Whitepaper creation <br/>
                - Ticket Sales <br/>
                - Private sale <br/>
              </p>
            </div>
          </li>
          <li>
            <div className='textRoadamp'>
              <time>Q4 2022</time>
              <p>
                - Token public presale 1 <br/>
                - Token public presale 2 <br/>
                - DAPP launching <br/>
                - Ladders System development <br/>
                - Release Gameplay PDF <br/>
              </p>
            </div>
          </li>
          <li>
            <div className='textRoadamp'>
              <time>Q5 2022</time> 
              <p>
                - Playable Ladders System Release <br/>
                - Tournament starts <br/>
                - Prize pool distribution <br/>
                - Marketplace <br/>
              </p>
            </div>
          </li>
        </ul>
      </section>

    </div>
  )
}

export default Roadmap