import React,{useEffect} from 'react'
import "./nfts.css"
import nftTournament1 from "./src/copaMundo.png"
import nftTournament2 from "./src/copaMundo.png"
import nftScroll from "./nftScroll"
import cardsFuncional from './cardsFuncional'
/* import backReflejo from "../tikets/src/BackTickets2.jpg" */

const Nfts = () => {

  useEffect(()=> {
    nftScroll()
    cardsFuncional()
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
            <div className="container_card"></div>  
            <div className="container_card"> </div> 
          </div>
        </div>
    </div>
  )
}

export default Nfts