import React, {useEffect} from 'react'
import "./roadmap.css"
import {FormattedMessage} from 'react-intl';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const Roadmap = () => {

  useEffect(()=>{

    function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

        
    const roadmapScroll = () =>{


      if (!isMobile()) {

          gsap.registerPlugin(ScrollTrigger); 

          gsap.from(".t1",{
            opacity:0,
            duration:.2,
            scrollTrigger:{
              trigger: ".containerTitle_roadmap",
              start: "top center",
              end: "bottom bottom",
            }
          })

          gsap.from(".t2",{
            opacity:0,
            duration:.2,
            scrollTrigger:{
              trigger: ".t1",
              start: "top end",
              end: "bottom bottom",
            }
          })


          gsap.from(".t3",{
            opacity:0,
            duration:.2,
            scrollTrigger:{
              trigger: ".t2",
              start: "top end",
              end: "bottom bottom",
            }
          })


          gsap.from(".t4",{
            opacity:0,
            duration:.2,
            scrollTrigger:{
              trigger: ".t3",
              start: "top end",
              end: "bottom bottom",
            }
          })

          
          gsap.from(".t5",{
            opacity:0,
            duration:.2,
            scrollTrigger:{
              trigger: ".t4",
              start: "top end",
              end: "bottom bottom",
            }
          })

          gsap.from(".t6",{
            opacity:0,
            duration:.2,
            scrollTrigger:{
              trigger: ".t5",
              start: "top end",
              end: "bottom bottom",
            }
          })

      }

    }
      
    roadmapScroll()

    return () => {
      roadmapScroll()
      isMobile()
    }


  },[])
  
  return (
    <div id='roadmap' className="containerRoadmap">
      <section className="intro">
        <div className="containerTitle_roadmap">
          <h1>
            <FormattedMessage
              id="roadmap-title"
              defaultMessage="ROADMAP"
            />
          </h1>
        </div>
      </section>

      <section className="lineaTiempo">
        <div className='inilineaTiempo'></div>
        <ul>
          <li>
            <div className='textRoadamp t1'>
              <strong className='qName'>
                <FormattedMessage
                  id="roadmap-q42021title"
                  defaultMessage="Q4 2021"
                />
              </strong >
              <p>
              <FormattedMessage
                  id="roadmap-q42021span1"
                  defaultMessage="- Concept Design"
              /><span>✓</span><br/>
              <FormattedMessage
                  id="roadmap-q42021span2"
                  defaultMessage="- Branding and game research"
              /><span>✓</span><br/>
              <FormattedMessage
                  id="roadmap-q42021span3"
                  defaultMessage="- NFT Research "
              /><span>✓</span><br/>
              <FormattedMessage
                  id="roadmap-q42021span4"
                  defaultMessage="- Token Research "
              /><span>✓</span><br/>
              <FormattedMessage
                  id="roadmap-q42021span5"
                  defaultMessage="- Development environment setup "
              /><span>✓</span><br/>
            </p>
            </div>
          </li>
          <li>
          <div className='textRoadamp t2'>
            <strong className='qName'>
                <FormattedMessage
                  id="roadmap-q1title"
                  defaultMessage="Q1 2022"
                />
              </strong >
              <p>
                <FormattedMessage
                    id="roadmap-q1span1"
                    defaultMessage="- Investor selection process"
                /><span>✓</span><br/>
                <FormattedMessage
                    id="roadmap-q1span2"
                    defaultMessage="- Landing Page Footage"
                /><span>✓</span><br/>
                <FormattedMessage
                    id="roadmap-q1span3"
                    defaultMessage="- Smart contracts development "
                /><span>✓</span><br/>
                <FormattedMessage
                    id="roadmap-q1span4"
                    defaultMessage="- NFTs Illustrations and 3D Models"
                /><span>✓</span><br/>
              </p>
            </div>
          </li>
          <li>
            <div className='textRoadamp t3 '>
            <strong className='qName'>
                <FormattedMessage
                  id="roadmap-q2title"
                  defaultMessage="Q2 2022"
                />
              </strong >
              <p>
                <FormattedMessage
                    id="roadmap-q2span1"
                    defaultMessage="- Ladders System development "
                /><span>✓</span><br/>
                <FormattedMessage
                    id="roadmap-q2span2"
                    defaultMessage="- Website Structure"
                /><span>✓</span><br/>
                <FormattedMessage
                    id="roadmap-q2span3"
                    defaultMessage="- Background Design  "
                /><span>✓</span><br/>
                <FormattedMessage
                    id="roadmap-q2span4"
                    defaultMessage="- Whitepaper Creation  "
                /><span>✓</span><br/> {/* 2 */}
                <FormattedMessage
                    id="roadmap-q2span5"
                    defaultMessage="- Established Terms and Conditions "
                /><span>✓</span><br/>
                <FormattedMessage
                    id="roadmap-q2span6"
                    defaultMessage="- Multi Language Website "
                /><span>✓</span><br/>
              </p>
            </div>
          </li>
          <li>
            <div className='textRoadamp t4'>
              <strong className='qName'>
                  <FormattedMessage
                    id="roadmap-q3title"
                    defaultMessage="Q3 2022"
                  />
                </strong >
                <p>
                  <FormattedMessage
                      id="roadmap-q3span1"
                      defaultMessage="- Dapp Design and development"
                  /><span>✓</span><br/>
                  <FormattedMessage
                      id="roadmap-q3span2"
                      defaultMessage="- Official launch of the website"
                  /><span>✓</span><br/>
                  <FormattedMessage
                      id="roadmap-q3span3"
                      defaultMessage="- Ticket Sales"
                  /><span>✓</span><br/>
                  <FormattedMessage
                      id="roadmap-q3span4"
                      defaultMessage="- Airdrop 1"
                  /><span>✓</span><br/>
                  <FormattedMessage
                      id="roadmap-q3span5"
                      defaultMessage="- Friendly matches Testing"
                  /><span>✓</span><br/>
                  <FormattedMessage
                      id="roadmap-q3span6"
                      defaultMessage="- Airdrop 2"
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q3span7"
                      defaultMessage="- Dapp Alpha Test "
                  /><br/>
              </p>
            </div>
          </li>
          <li>
            <div className='textRoadamp t5'>
            <strong className='qName'>
                  <FormattedMessage
                    id="roadmap-q4title"
                    defaultMessage="Q4 2022"
                  />
                </strong >
                <p>
                  <FormattedMessage
                      id="roadmap-q4span1"
                      defaultMessage="- Official Alpha Dapp launch"
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q4span2"
                      defaultMessage="- Token Pre Sale 1 "
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q4span3"
                      defaultMessage="- Token Pre Sale 2"
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q4span4"
                      defaultMessage="- Beta Crypto Ball"
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q4span5"
                      defaultMessage="- Tournament starts"
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q4span6"
                      defaultMessage="- Staking Live"
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q4span7"
                      defaultMessage="- Marketplace"
                  /><br/>
              </p>
            </div>
          </li>
          <li>
            <div className='textRoadamp t6'>
              <strong className='qName'>
                  <FormattedMessage
                    id="roadmap-q5title"
                    defaultMessage="Q1 2023"
                  />
                </strong >
                <p>
                  <FormattedMessage
                      id="roadmap-q5span1"
                      defaultMessage="- Prize pool distribution"
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q5span2"
                      defaultMessage="- New games and strategic alliances"
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q5span3"
                      defaultMessage="- Esports coverage"
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q5span4"
                      defaultMessage="- Unity Crypto Ball"
                  /><br/>
              </p>
            </div>
          </li>
        </ul>
      </section>

    </div>
  )
}

export default Roadmap