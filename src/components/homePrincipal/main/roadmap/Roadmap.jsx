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
              <time>Q4 2021</time>
              <p>
              - Concept Design <span>✓</span><br/>
              - Branding and game research <span>✓</span> <br/>
              - NFT Research <span>✓</span> <br/>
              - Token Research <span>✓</span> <br/>
              - Development environment setup <span>✓</span> <br/>
            </p>
            </div>
          </li>
          <li>
          <div className='textRoadamp'>
              <time>Q1 2022</time> 
              <p>
                - Web footage selection <span>✓</span> <br/>
                - Smart contracts development <span>✓</span> <br/>
                - NFTs Illustrations and 3D Models <span>✓</span>  <br/>
                - Investor selection process <span>✓</span><br/>
              </p>
            </div>
          </li>
          <li>
            <div className='textRoadamp'>
              <time>Q2 2022</time> 
              <p>
                - Ladders System development <span>✓</span>  <br/>
                - Whitepaper creation <span>✓</span>  <br/>
                - Website Structure <span>✓</span>  <br/>
                - Background Design <span>✓</span>  <br/>
                - Private sale <br/>
                - Ticket Sales<br/>
              </p>
            </div>
          </li>
          <li>
            <div className='textRoadamp'>
              <time>Q3 2022</time>
              <p>
                - Dapp Design and development <br/>
                - Official launch of the website<br/>
                - Public Mini Game <br/>
                - Token public presale 1 <br/>
                - Token public presale 2 <br/>
                - Dapp Beta <br/>
              </p>
            </div>
          </li>
          <li>
            <div className='textRoadamp'>
              <time>Q4 2022</time> 
              <p>
                - Dapp launch<br/>
                - Playable Ladders System Release <br/>
                - Tournament starts <br/>
                - Marketplace <br/>
                - Prize pool distribution <br/>
              </p>
            </div>
          </li>
        </ul>
      </section>

    </div>
  )
}

export default Roadmap