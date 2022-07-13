import React, {lazy, Suspense, useState, useContext} from 'react'
import { ethers } from 'ethers';
import { contractAddress, abi } from './utils'
import truncateEthAddress from 'truncate-eth-address';
import "./tiketBuy.css"
import tiketBasico from "./src/tiketBasic.png"
import tiketBoost from "./src/tiketBoost.png"
import videoParticle from "./src/particle1P.mp4"
import priceDescuento from "./codigoDescuento/src/priceDescuento.jpg"
import TermsAndCondicionsPopup from '../../homePrincipal/header/termsAndCondicionsPopup/TermsAndCondicionsPopup';
import Context from '../../context/Context'

const NavTickets = lazy(() => import ("../NavTickets/NavTickets"))
const SelectTokenBoost = lazy(() => import ('./tokensSelect/tokenBoost/SelectTokenBoost'))
const SelectTokenBasic = lazy(() => import ('./tokensSelect/tokenBasic/SelectTokenBasic'))
const Spinner = lazy(() => import ('../../spinner/Spinner'))
const Social = lazy(() => import ("../../homePrincipal/header/home/social/Social"))
const CodigoDescuento = lazy(() => import ("./codigoDescuento/CodigoDescuento"))


const TiketBuyPage = () => {
  const context = useContext(Context)

  const [provider, setProvider] = useState(undefined);
  const [connected, setConnected] = useState(false);
  const [contract, setContract] = useState(false);
  const [account, setAccount] = useState(undefined);
  const [signer, setSigner] = useState(undefined);

  const [referralCode, setReferralCode] = useState(0);
  const [activeReferralCode, setActiveReferralCode] = useState(0);
  const [submitCodigoDescuento , setSubmitCodigoDescuento] = useState(false) //validacion de si la persona compro o no - modificar a false (true para pruebas)
  const [copyActive , setCopyActive] = useState(false) //validacion de si la persona compro o no - modificar a false (true para pruebas)

  const [cantTicketsBasic, setCantTicketsBasic] = useState(1)
  const [cantTicketsBoost, setCantTicketsBoost] = useState(1)
  const [priceTicketBasic, setPriceTicketBasic] = useState(20)
  const [priceTicketBoost, setPriceTicketBoost] = useState(45)

  const login = async () => {
    try {
      const newProvider = new ethers.providers.Web3Provider(window.ethereum);
      if(newProvider !== undefined) {
        const newAccount = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const newSigner = await newProvider.getSigner();
        const newContract = await new ethers.Contract( contractAddress , abi , newSigner );


        await newContract.getReferralCodeFromAddress(newAccount[0])
        .then(res => {
          if (res != 0) { // si el usuario tiene un codigo de referencia
            console.log(res);
            setCopyActive(true);
            setReferralCode(res);
          }  
          else {
            setCopyActive(false);
          }
        })

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
    const tx = await contract.mint(cantTicketsBasic, 4, 0, activeReferralCode) // Cantidad, Moneda, Tipo de Ticket, Referral Code
    .then(res => { 
      // use the returned value here
      setTimeout(() => {
        alert("Minted successfully"); // Emite un evento cuando se confirma la transaccion. (se muestra el video basic)
        console.log(res); 

      }, 15000);
    }) 
  }


  const checkRefCodeValid = async (code) => {
    if(code != referralCode) {
      await contract.getReferralAddressFromCode(code)
      .then(res => {
        if (res != "0x0000000000000000000000000000000000000000") {
          setSubmitCodigoDescuento(true);
          setActiveReferralCode(code);
        } 
        else {
          setSubmitCodigoDescuento(false);
          setActiveReferralCode(0);
        }
      })
    } else {

      // Acá habría que mostrar un error diciendo que el codigo ingresado no puede ser el codigo de uno mismo. Osea uno no se puede referir a si mismo.

    }
  }

  const buyBoostTicket = async () => {
    const tx = await contract.mint(cantTicketsBasic, 4, 0, activeReferralCode) // Cantidad, Moneda, Tipo de Ticket, Referral Code
    .then(res => { 
      // use the returned value here
      setTimeout(() => {
        alert("Minted successfully"); // Emite un evento cuando se confirma la transaccion. (se muestra el video boost)
        console.log(res); 

      }, 15000);
    }) 
  }

  return (
    <div className="containerTiketsBuy">
          { !context.checkTerminosyCondiciones ? <TermsAndCondicionsPopup /> : null}
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
                  <div className="boxPrinceBasic">
                    <h2 className='priceBasicOrigin'>${priceTicketBasic}</h2>
                    <img className='imagenBanDescuento' src={priceDescuento} alt="precio descuento banner " />
                  </div>
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
                    <div className="boxPrinceBoost">
                      <h2>${priceTicketBoost}</h2>
                      <img className='imagenBanDescuentoBoost' src={priceDescuento} alt="precio descuento banner " />
                    </div>
                  
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
                
                {connected ? <input type="text" className="copyWallet" id='copyWallet' ></input> : null}

                <span className="BorderTopBottom-ticketSale-Connect  "></span>
                <span className="BorderLeftRight-ticketSale-Connect  "></span>
              </div>
            </div>
 
            <CodigoDescuento referralCode={referralCode} copyActive={copyActive} checkRefCodeValid={checkRefCodeValid} submitCodigoDescuento={submitCodigoDescuento} /> 
            
          </div>
        </div>

    </div>
  )
}

export default TiketBuyPage;