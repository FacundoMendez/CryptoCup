import React, {useEffect} from 'react'
import "./roadmap.css"
import {FormattedMessage} from 'react-intl';

const Roadmap = () => {


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
                    defaultMessage="- Web footage selection"
                /><span>✓</span><br/>
                <FormattedMessage
                    id="roadmap-q1span2"
                    defaultMessage="- Smart contracts development "
                /><span>✓</span><br/>
                <FormattedMessage
                    id="roadmap-q1span3"
                    defaultMessage="- NFTs Illustrations and 3D Models "
                /><span>✓</span><br/>
                <FormattedMessage
                    id="roadmap-q1span4"
                    defaultMessage="- Investor selection process "
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
                    defaultMessage="- Whitepaper creation"
                /><span>✓</span><br/>
                <FormattedMessage
                    id="roadmap-q2span3"
                    defaultMessage="- Website Structure "
                /><span>✓</span><br/>
                <FormattedMessage
                    id="roadmap-q2span4"
                    defaultMessage="- Background Design  "
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
                      defaultMessage="- Private sale "
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q3span2"
                      defaultMessage="- Ticket Sales"
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q3span3"
                      defaultMessage="- Dapp Design and development "
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q3span4"
                      defaultMessage="- Official launch of the website "
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q3span5"
                      defaultMessage="- Public Mini Game "
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q3span6"
                      defaultMessage="- Token public presale 1 "
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q3span7"
                      defaultMessage="- Token public presale 2"
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q3span8"
                      defaultMessage="- Dapp Beta"
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
                      defaultMessage="- Dapp launch"
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q4span2"
                      defaultMessage="- Playable Ladders System Release "
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q4span3"
                      defaultMessage="- Tournament starts  "
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q4span4"
                      defaultMessage="- Marketplace"
                  /><br/>
                  <FormattedMessage
                      id="roadmap-q4span5"
                      defaultMessage="- Prize pool distribution "
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