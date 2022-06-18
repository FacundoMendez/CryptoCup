import React,{useEffect} from 'react'
import "./nfts.css"
import nftScroll from "./nftScroll"
import cardsFuncional from './cardsFuncional'
/* import backReflejo from "../tikets/src/BackTickets2.jpg" */
import videoCopaBasic from "./src/prizepoolBasicVideo.mp4"
import videoCopaBoost from "./src/prizepoolBoostVideo.mp4"
import prizepoolBasic from "./src/prizepoolBasic.png"
import effectPool from './effectPool'


const Nfts = () => {

  useEffect(()=> {
    nftScroll()
    cardsFuncional()
    effectPool()
  },[])

  return (
    <div className="containerNfts">
{/*       <img className="backgroundReflejo backTikets " src={backReflejo} alt="background" /> */}

        <div className="titleNfts">
            <h2>NFT'S</h2>
        </div>
        <div className="textNfts">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet libero quidem cum? Deleniti incidunt distinctio quidem. Deleniti fuga, eaque, quo voluptas vel magnam officia dicta mollitia, aut quia ratione sit!
            </p>
        </div>
        <div className="tiposTorneos">   
          <div className="container">
            <div className="container_card">
                <video className='videoCopaBasic' src={videoCopaBasic} autoPlay loop muted ></video> 
            </div>  
            <div className="container_card"> 
                <video className='videoCopaBoost' src={videoCopaBoost} autoPlay loop muted ></video> 
            </div> 
          </div>
        </div>
{/* 
        <div className="prizepool">
            <div className="prizepoolBasic">
                <img className='imgPrizePoolBasic' src={prizepoolBasic} alt="PrizePool basic" />
            </div>
        </div> */}

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