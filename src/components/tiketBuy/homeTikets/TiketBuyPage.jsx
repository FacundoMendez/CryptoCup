import React, {lazy, Suspense, useState} from 'react'
import { ethers } from 'ethers';
import { contractAddress, abi } from './utils'
import truncateEthAddress from 'truncate-eth-address';
import "./tiketBuy.css"
import tiketBasico from "./src/tiketBasic.png"
import tiketBoost from "./src/tiketBoost.png"
import videoParticle from "./src/particle1P.mp4"
import priceDescuento from "./codigoDescuento/src/priceDescuento.jpg"

const NavTickets = lazy(() => import ("../NavTickets/NavTickets"))
const SelectTokenBoost = lazy(() => import ('./tokensSelect/tokenBoost/SelectTokenBoost'))
const SelectTokenBasic = lazy(() => import ('./tokensSelect/tokenBasic/SelectTokenBasic'))
const Spinner = lazy(() => import ('../../spinner/Spinner'))
const Social = lazy(() => import ("../../homePrincipal/header/home/social/Social"))
const CodigoDescuento = lazy(() => import ("./codigoDescuento/CodigoDescuento"))


const TiketBuyPage = () => {

  const [provider, setProvider] = useState(undefined);
  const [connected, setConnected] = useState(false);
  const [contract, setContract] = useState(false);
  const [account, setAccount] = useState(undefined);
  const [signer, setSigner] = useState(undefined);

  const [cantTicketsBasic, setCantTicketsBasic] = useState(1)
  const [cantTicketsBoost, setCantTicketsBoost] = useState(1)
  const [priceTicketBasic, setPriceTicketBasic] = useState(20)
  const [priceTicketBoost, setPriceTicketBoost] = useState(35)

  const login = async () => {
    try {
      let newProvider = new ethers.providers.Web3Provider(window.ethereum);
      if(newProvider !== undefined) {
        let newAccount = await window.ethereum.request({ method: 'eth_requestAccounts' });
        let newSigner = await newProvider.getSigner();
        let newContract = await new ethers.Contract( contractAddress , abi , newSigner )
        setProvider(newProvider);
        setAccount(newAccount);
        setSigner(newSigner);
        setContract(newContract);
        setConnected(true);

      } else {
        alert("Please Install Metamask.");
      }
    } catch (error) {
      console.log(error);
    }

  }

  const buyBasicTicket = async () => {
    const tx = await contract.mint(1, 4, 0)
    .then(res => { 
      // use the returned value here
      setTimeout(() => {
        alert("Minted successfully");
        console.log(res); 

      }, 15000);
    }) 
  }

  const buyBoostTicket = async () => {
    const tx = await contract.mint(1, 4, 1)
    .then(res => { 
      // use the returned value here
      setTimeout(() => {
        alert("Minted successfully");
        console.log(res); 

      }, 15000);
    }) 
  }

  return (
    <div className="containerTiketsBuy">
      <Suspense fallback={<Spinner/>}>
        <NavTickets login={login} connected={connected} account={account !== undefined? truncateEthAddress(account[0]):account} />
      </Suspense>
      <Social />

      <video className='particle-Tikets' src={videoParticle} autoPlay loop muted ></video>
      
      <div className="flexTickets">
          
          <div className="ticketsSale">

            <div className="boxBlurToken"></div>
            <div className="boxBlurTokenBoost"></div>

              <div className="boxTickets">
                  <img className='imgTicket imgTicket-basic' src={tiketBasico} alt="Ticket Basic" />
                  
                  <div className="priceBasic">
                    <h2 className='priceBasicOrigin'>${priceTicketBasic}</h2>
                    <img className='imagenBanDescuento' src={priceDescuento} alt="precio descuento banner " />

                    <div className="boxPriceBasicDescuento">
                      <h2 className='priceBasicDescuento'>${priceTicketBasic - 5}</h2>
                    </div>
                  </div>

                  <div className="wrapperBotton-Tickets">
                      <div className="btnButton-Tickets" onClick={async () => connected? await buyBasicTicket() : await login()}>
                          <p >{connected? "BUY" : "CONNECT"}</p>
                          <span className="BorderTopBottom-Tickets "></span>
                          <span className="BorderLeftRight-Tickets "></span>
                      </div>
                      <SelectTokenBasic />
                  </div>

                  <div className="cantTicket-basic">

                        <button className='menos-basic' onClick={() => {
                            if (cantTicketsBasic > 1){
                              setCantTicketsBasic(cantTicketsBasic - 1) 
                            }
                            if(priceTicketBasic >= 30){
                              setPriceTicketBasic(priceTicketBasic - 20) 
                            }
                        }}> - </button>

                        <div className="contador-basic">
                          <p>{cantTicketsBasic}</p>
                        </div>

                        <button className='mas-basic' onClick={() => {
                            if(priceTicketBasic >= 15){
                              setPriceTicketBasic(priceTicketBasic + 20) 
                            }
                            setCantTicketsBasic(cantTicketsBasic + 1)
                        } }> + </button>

                  </div>
              </div>

              <div className="boxTickets">
                  <img className='imgTicket imgTicket-boost' src={tiketBoost} alt="Ticket Ladder" />
                  
                  <div className="priceBoost">
                    <h2>${priceTicketBoost}</h2>

                    <img className='imagenBanDescuentoBoost' src={priceDescuento} alt="precio descuento banner " />

                    <div className="boxPriceBoostDescuento">
                      <h2 className='priceBoostDescuento'>${priceTicketBoost - 5}</h2>
                    </div>
                  </div>

                  <div className="wrapperBotton-Tickets">
                      <div className="btnButton-Tickets" onClick={async () => connected? await buyBoostTicket() : await login()}>
                          <p>{connected? "BUY" : "CONNECT"}</p>
                          <span className="BorderTopBottom-Tickets "></span>
                          <span className="BorderLeftRight-Tickets "></span>
                      </div>
                      <SelectTokenBoost />
                  </div>
                  <div className="cantTicket-boost">
                        <button className='menos-boost' onClick={() => {

                          if (cantTicketsBoost > 1){
                            setCantTicketsBoost(cantTicketsBoost - 1)  
                          }
                          if(priceTicketBoost >= 60){
                            setPriceTicketBoost(priceTicketBoost - 35) 
                          }


                        }}> - </button>
                        <div className="contador-boost">
                          <p>{cantTicketsBoost}</p>
                        </div>
                        <button className='mas-boost' onClick={() => {
                          if(priceTicketBoost >= 30){
                            setPriceTicketBoost(priceTicketBoost + 35) 
                          }
                          setCantTicketsBoost(cantTicketsBoost + 1)
                          
                          } }> + </button>
                  </div>
              </div>
          </div>

          <div className="text-tickets">
            <div className="titleTicket">
              <h2>LADDER TICKETS </h2>
            </div>
            <div className="textoTicket">
              <p>
              Everything you need is here. Let's build your way to the top!  
              </p>
            </div>

            <div id="connectWallet" className="wrapperBotton-ticketSale-Connect ">
              <div className="btn-ticketSale-Connect" onClick={async () => connected? {} : await login()}>
                <p className='select-Connect' >{connected? truncateEthAddress(account[0]) : "Connect Wallet"}</p>
                
           {/* {connected ? <input type="text" className="copyWallet" id='copyWallet' data-autoselect="" value={truncateEthAddress(account[0])} aria-label={truncateEthAddress(account[0])}  readonly=""></input> : null} */}

                <input type="text"  className="copyWallet2" id='copyWallet2'  data-autoselect=""  aria-label="texto copiado" readOnly="" defaultValue="Texto Copiado"/>

                <span className="BorderTopBottom-ticketSale-Connect  "></span>
                <span className="BorderLeftRight-ticketSale-Connect  "></span>
              </div>
            </div>

            <CodigoDescuento /> 
            
          </div>
        </div>

    </div>
  )
}

export default TiketBuyPage;