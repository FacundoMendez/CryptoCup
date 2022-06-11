import React,{useEffect} from 'react'
import "./nfts.css"
import nftTournament1 from "./src/copaMundo.png"
import nftTournament2 from "./src/copaMundo.png"
import nftScroll from "./nftScroll"
/* import backReflejo from "../tikets/src/BackTickets2.jpg" */

const Nfts = () => {

  useEffect(()=> {
    nftScroll()
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
              <div className="flip">
                  <div className="front" >
                    <h1 className="text-shadow">BASSIC TORUNAMENT <br />
                        NFT CHAMPION
                    </h1>
                  </div>
                  <div className="back nftTournament1">
                  <img src={nftTournament1} alt="Nft Tournament Basic" />
                    {/* <h2>BASSIC TORUNAMENT</h2>
                    <p>Descripcion torneo BASSIC</p> */}
                  </div>
              </div>

              <div className="flip">
                  <div className="front" >
                    <h1 className="text-shadow">BOOST TORUNAMENT <br />
                        NFT CHAMPION
                    </h1>
                  </div>
                  <div className="back nftTournament2">
                    <img src={nftTournament2} alt="Nft Tournament Boost" />
                 {/*    <h2>BOOST TORUNAMENT</h2>
                    <p>Descripcion torneo BOOST</p> */}
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Nfts