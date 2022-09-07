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

    <div className="containerWins">
        <div className="divisionPrizePool">
              <img className='divisionImgPrizePool' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:low/v1661531281/CryptocupQatar/nft/Sin_t%C3%ADtulo_vsybw8.webp"/* {division} */ alt="Division container" />
        </div>


        <h2 className='subtitleNftWinners'> 
          <FormattedMessage
            id="nfts-prizePoolTitle"
            defaultMessage="Winners NFT's"
          />
        </h2>

        <div className="textNfts">
            <p className='textCardsNft'>
              <FormattedMessage
                id="nfts-prizePooltext"
                defaultMessage="We introduce you to omni chain NFTs, where the champions could redeem and sell in his favorite marketplace without the need of a bridge."
              />    
            </p>
        </div>

        <div className="tiposTorneos">   
          <img className='rockIz' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:eco/v1662509449/CryptocupQatar/nft/nftsScene/RocasFlotantesIzquierdaConPiedraGrande_czfvtz.png" alt="rocaGrandeIZ" />
          <img className='fondoRock' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:low/v1662514123/CryptocupQatar/nft/nftsScene/RocasFondo_lyg4v4.png" alt="background rocas" />

          <div className="container">
            <div className="container_card ">
                <img className='imgNftBasic' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:best/v1662509449/CryptocupQatar/nft/nftsScene/IslaFlotanteBasicCup_dh2wte.png" alt="nft basic" />
            </div>  
            <div className="container_card"> 
              <img className='imgNftBoost' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:best/v1662509449/CryptocupQatar/nft/nftsScene/IslaFlotanteBoostCup_oypdra.png" alt="nft boost" />
            </div> 
          </div>
          
          <img className='rockDer' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:eco/v1662509449/CryptocupQatar/nft/nftsScene/RocasFlotantesDerechaConPiedraGrande_zjtw65.png" alt="rocaGrandeDr" />
        </div>
 

        <div className="divisionPrizePool-bottom">
              <img className='divisionImgPrizePool-bottom' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:low/v1661531281/CryptocupQatar/nft/Sin_t%C3%ADtulo_vsybw8.webp" alt="Division container" />
        </div>
    </div>

      



    </div>
  )
}

export default Nfts