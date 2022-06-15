import React, {lazy, Suspense, useState} from 'react'
import { ethers } from 'ethers';
import { contractAddress, abi } from './utils'
import truncateEthAddress from 'truncate-eth-address';
import "./tiketBuy.css"

import tiketBasico from "./src/tiketBasic.png"
import tiketBoost from "./src/tiketBoost.png"
import videoParticle from "./src/particle1P.mp4"

import Social from "../../homePrincipal/header/home/social/Social"
import Spinner from '../../spinner/Spinner'
import SelectTokenBasic from './tokensSelect/tokenBasic/SelectTokenBasic'
import SelectTokenBoost from './tokensSelect/tokenBoost/SelectTokenBoost'

const NavTickets = lazy(() => import ("../NavTickets/NavTickets"))


const TiketBuyPage = () => {



  const [provider, setProvider] = useState(undefined);
  const [connected, setConnected] = useState(false);
  const [contract, setContract] = useState(false);
  const [account, setAccount] = useState(undefined);
  const [signer, setSigner] = useState(undefined);

  const [cantTicketsBasic, setCantTicketsBasic] = useState(1)
  const [cantTicketsBoost, setCantTicketsBoost] = useState(1)


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

              <div className="boxTickets">
                  <img className='imgTicket imgTicket-basic' src={tiketBasico} alt="Ticket Basic" />
                  
                  <div className="wrapperBotton-Tickets">
                      <div className="btnButton-Tickets" onClick={async () => connected? await buyBasicTicket() : await login()}>
                          <p>{connected? "BUY" : "CONNECT"}</p>
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
                        }}> - </button>
                        <div className="contador-basic">
                          <p>{cantTicketsBasic}</p>
                        </div>
                        <button className='mas-basic' onClick={() => setCantTicketsBasic(cantTicketsBasic + 1) }> + </button>
                  </div>
              </div>

              <div className="boxTickets">
                  <img className='imgTicket imgTicket-boost' src={tiketBoost} alt="Ticket Ladder" />

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
                        }}> - </button>
                        <div className="contador-boost">
                          <p>{cantTicketsBoost}</p>
                        </div>
                        <button className='mas-boost' onClick={() => setCantTicketsBoost(cantTicketsBoost + 1) }> + </button>
                  </div>
              </div>
          </div>

          <div className="text-tickets">
            <div className="titleTicket">
              <h2>BOOST LADDER <br />
                TOURNAMENT
              </h2>
            </div>
            <div className="textoTicket">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam tempora praesentium eius esse dignissimos minima at architecto ipsam dicta voluptas amet, odio non cumque pariatur repellat velit repellendus. Culpa, labore.
              </p>
            </div>

            <div id="connectWallet" className="wrapperBotton-ticketSale-Connect ">
              <div className="btn-ticketSale-Connect" onClick={async () => connected? {} : await login()}>
                <p className='select-Connect'>{connected? truncateEthAddress(account[0]) : "Connect Wallet"}</p>
                <span className="BorderTopBottom-ticketSale-Connect  "></span>
                <span className="BorderLeftRight-ticketSale-Connect  "></span>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default TiketBuyPage;