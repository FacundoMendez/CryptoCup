import React,{useEffect} from 'react'
import "./nfts.css"
import nftScroll from "./nftScroll"
import cardsFuncional from './cardsFuncional'
import videoCopaBasic from "./src/prizepoolBasicVideo.mp4"
import videoCopaBoost from "./src/prizepoolBoostVideo.mp4"
import effectPool from './effectPool'


const Nfts = () => {

  useEffect(()=> {
    nftScroll()
    cardsFuncional()
    effectPool()
  },[])

  return (
    <div className="containerNfts">

        <div className="titleNfts">
            <h2>Competition Rewards</h2>
        </div>
        <div className="textNfts">
            <p>
              We introduce you to omni chain NFTs, where the champions could redeem and sell in his favorite marketplace without the need of a bridge.    
            </p>
        </div>
        <h2 className='subtitleNftWinners'>Winners NFT's</h2>

        <div className="tiposTorneos">   
          <div className="container">
            <div className="container_card ">
                <video className='videoCopaBasic' src={videoCopaBasic} autoPlay loop muted type="video/mp4" ></video> 
                <p className='basicTextVideo'>BASIC LADDER</p>
            </div>  
            <div className="container_card"> 
                <video className='videoCopaBoost' src={videoCopaBoost}  autoPlay loop muted type="video/mp4" ></video> 
                <p className='boostTextVideo'>BOOST LADDER</p>
            </div> 
          </div>
        </div>
 


      <div className="boxPricePool">
        <h2 className='subtitleNftPricePool'>Ladders prize pool</h2>


        <svg className="arrowss">
					<path className="a1" d="M0 0 L30 32 L60 0"></path>
					<path className="a2" d="M0 20 L30 52 L60 20"></path>
					<path className="a3" d="M0 40 L30 72 L60 40"></path>
			</svg>
      </div>


      <section className="events-page ">
        
        <div className="event event1">
          <div className="pinWrapper">
            <div className="image">
            </div>
          </div>
        </div>
        <div className="event event2">
          <div className="pinWrapper">
            <div className="image">
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nfts