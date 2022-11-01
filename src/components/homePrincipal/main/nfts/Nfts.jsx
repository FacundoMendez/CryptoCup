import React,{useEffect} from 'react'
import "./nfts.css"
import nftScroll from "./nftScroll"
import cardsFuncional from './cardsFuncional'
import effectPool from './effectPool'
import {FormattedMessage} from 'react-intl';

const Nfts = () => {

  useEffect(()=> {
    nftScroll()
    cardsFuncional()
    effectPool()
  },[])

  return (
    <div className="containerNfts">
        <div className="titleNfts">
            <h2>
                <FormattedMessage
                  id="nfts-title"
                  defaultMessage="Competition Rewards"
                />
            </h2>
            
        </div>
        <div className="textNfts">
            <p className='textCardsNft'>
              <FormattedMessage
                id="nfts-prizePooltext2"
                defaultMessage="Each Ladder is going to accumulate USDT in their own way. The Basic Ladder will acumulate a Prizepool based on the Token Sell Fee Comisions and having a Prizepool base of 100 USDT. In other hand we have the Boost Ladder which will accumulate USDT from the sales of the NFT Tickets. "
              />    
            </p>
            <br /> <br />

            <p className='textCardsNft textNft_top'>
              <FormattedMessage
                id="nfts-prizePooltext"
                defaultMessage="Also, we introduce you the OmniChain NFT’s, where the champions could redeem and sell in his favorite Marketplace without the need of a bridge."
              />    
            </p>
            <br /> <br />
        </div>
        <div className="boxPricePool">
          <svg className="arrowss">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </div>

      <section className="events-page ">
          <div className="event event1">
            <div className="pinWrapper">
              <div className="image"></div>
            </div>
          </div>
          <div className="event event2">
            <div className="pinWrapper">
              <div className="image"></div>
            </div>
          </div>
      </section>


      <p className='note_nfts'>
        <FormattedMessage
            id="note_nft"
            defaultMessage="Note: Basic Ladder Prizepool is determined by the sell fee comissions and the Boost Ladder Prizepool is determined by the number of participants of the Ladder."
          />
      </p>

    <div className="containerWins">

        <h2 className='subtitleNftWinners'> 
          <FormattedMessage
            id="nfts-prizePoolTitle"
            defaultMessage="Winners NFT's"
          />
        </h2>



        <div className="tiposTorneos">   
          <img className='rockIz rockgrande' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_642,q_auto:eco,w_607/v1662509449/CryptocupQatar/nft/nftsScene/RocasFlotantesIzquierdaConPiedraGrande_czfvtz.png" alt="rocaGrandeIZ" />
          
          <img className='fondoRock' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_757,q_auto:low,w_1375/v1662514123/CryptocupQatar/nft/nftsScene/RocasFondo_lyg4v4.png" alt="background rocas" />

          <div className="container">
            <div className="container_card ">
                <img className='imgNftBasic' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_646,q_auto:best,w_565/v1662509449/CryptocupQatar/nft/nftsScene/IslaFlotanteBasicCup_dh2wte.png" alt="nft basic" />
            </div>  
            <div className="container_card"> 
              <img className='imgNftBoost' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_646,q_auto:best,w_565/v1662509449/CryptocupQatar/nft/nftsScene/IslaFlotanteBoostCup_oypdra.png" alt="nft boost" />
            </div> 
          </div>
          
          <img className='rockDer rockgrande' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_642,q_auto:eco,w_607/v1662509449/CryptocupQatar/nft/nftsScene/RocasFlotantesDerechaConPiedraGrande_zjtw65.png" alt="rocaGrandeDr" />
        </div>
 
    </div>

  </div>
  )
}

export default Nfts