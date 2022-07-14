import React, {lazy, Suspense, useState, useContext} from 'react'
import { ethers } from 'ethers';
import { contractAddress, abi } from './utils'
import truncateEthAddress from 'truncate-eth-address';
import "./tiketBuy.css"
import tiketBasico from "./src/tiketBasic.png"
import tiketBoost from "./src/tiketBoost.png"
import videoParticle from "./src/particle1P.mp4"
import priceDescuento from "./codigoDescuento/src/priceDescuento.jpg"
import Context from '../../context/Context'

const TermsAndCondicionsPopup = lazy(() => import ('../../homePrincipal/header/termsAndCondicionsPopup/TermsAndCondicionsPopup'))
const VideoBuyBoost = lazy(() => import ("./tokensSelect/tokenBoost/videoBuyBoost/VideoBuyBoost"))
const VideoBuyBasic = lazy(() => import ('./tokensSelect/tokenBasic/videoBuyBasic/VideoBuyBasic'))
const NavTickets = lazy(() => import ("../NavTickets/NavTickets"))
const SelectTokenBoost = lazy(() => import ('./tokensSelect/tokenBoost/SelectTokenBoost'))
const SelectTokenBasic = lazy(() => import ('./tokensSelect/tokenBasic/SelectTokenBasic'))
const Spinner = lazy(() => import ('../../spinner/Spinner'))
const Social = lazy(() => import ("../../homePrincipal/header/home/social/Social"))
const CodigoDescuento = lazy(() => import ("./codigoDescuento/CodigoDescuento"))
const NoMetamask = lazy(() => import ('./codigoDescuento/popupsErrors/noMetamask/NoMetamask'))

const TiketBuyPage = () => {
  const context = useContext(Context)

  /* validaciones de coneccion blockchain */

  const [provider, setProvider] = useState(undefined);
  const [connected, setConnected] = useState(false);
  const [contract, setContract] = useState(false);
  const [account, setAccount] = useState(undefined);
  const [signer, setSigner] = useState(undefined);

  /* validaciones de codigo de descuento */

  const [referralCode, setReferralCode] = useState(0);  /* validacion > 0 */
  const [activeReferralCode, setActiveReferralCode] = useState(0);
  const [submitCodigoDescuento , setSubmitCodigoDescuento] = useState(false) //validacion de si la persona compro o no - modificar a false (true para pruebas)
  const [copyActive , setCopyActive] = useState(false) //validacion de si la persona compro o no - modificar a false (true para pruebas)

  /* validaciones de errores */

  const [codigoPropio, setCodigoPropio] = useState(false)
/*   const [chainIncorrecta, setChainIncorrecta] = useState(false) */
  const [noMetamask, setNoMetamask] = useState(false)
  const [codigoIncorrecto, setCodigoIncorrecto] = useState(false)

  /* validacion de compra de tickets */

  const [buyTicketBasic, setBuyTicketBasic] = useState(false)
  const [buyTicketBoost, setBuyTicketBoost] = useState(false)

  /* validaciones de tickets (precio / cantidad) */

  const [cantTicketsBasic, setCantTicketsBasic] = useState(1)
  const [cantTicketsBoost, setCantTicketsBoost] = useState(1)
  const [priceTicketBasic, setPriceTicketBasic] = useState(20)
  const [priceTicketBoost, setPriceTicketBoost] = useState(35)

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
        setNoMetamask(true)

        setTimeout(function(){
          setNoMetamask(false) 
        },5000)
      }
    } catch (error) {
      console.log(error);
    }

  }

  const buyBasicTicket = async () => {
    // Aca se deberia activar el timeout.
    const tx = await contract.mint(cantTicketsBasic, 4, 0, activeReferralCode) // Cantidad, Moneda, Tipo de Ticket, Referral Code
    
    const receipt = await tx.wait()
    console.log(receipt);

    setBuyTicketBasic(true);

    setTimeout(function(){ 
      setBuyTicketBasic(false); 
    }, 9000);

  }
  
  const buyBoostTicket = async () => {
    // Aca se deberia activar el timeout.
    const tx = await contract.mint(cantTicketsBasic, 4, 0, activeReferralCode) // Cantidad, Moneda, Tipo de Ticket, Referral Code
    const receipt = await tx.wait()
    console.log(receipt);

    setBuyTicketBoost(true);

    setTimeout(function(){ 
      setBuyTicketBoost(false); 
    }, 9000);
  }

  const checkRefCodeValid = async (code) => {
    if (code) {
      if(code !== referralCode.toString()) {
        await contract.getReferralAddressFromCode(code)
        .then(res => {
          if (res != "0x0000000000000000000000000000000000000000") {
            setSubmitCodigoDescuento(true);
            setActiveReferralCode(code);
          } 
          else {
            setSubmitCodigoDescuento(false);
            setActiveReferralCode(0);

            setCodigoIncorrecto(true)  /* error codigo incorrecto */
            setTimeout(function(){
              setCodigoIncorrecto(false)
            },6000)
          }
        })
      } else {
        setCodigoPropio(true)

        setTimeout(function(){   //error de codigo propio.
          setCodigoPropio(false)
        },2000)
        
  
      }
    }
  }


  return (
    <div className="containerTiketsBuy">
          { !context.checkTerminosyCondiciones ? <TermsAndCondicionsPopup /> : null}

      <Suspense fallback={<Spinner/>}>
          <NavTickets login={login} connected={connected} account={account !== undefined? truncateEthAddress(account[0]):account} />
      </Suspense>

      <Social />


      <video className='particle-Tikets' src={videoParticle} autoPlay loop muted ></video>
      
      {buyTicketBasic ?  <VideoBuyBasic /> : null}
      {buyTicketBoost ?  <VideoBuyBoost /> : null}

      {noMetamask ? <NoMetamask /> : null}

      <div className="flexTickets">
          <div className="ticketsSale">
            <div className="boxBlurToken"></div>
            <div className="boxBlurTokenBoost"></div>
              <div className="boxTickets">


                 {/* ticket basic- descuentos aplicados */}

                  <img className='imgTicket imgTicket-basic' src={tiketBasico} alt="Ticket Basic" />
                  <div className="priceBasic">
                      <div className="boxPrinceBasic">
                        <h2 className='priceBasicOrigin'>${priceTicketBasic}</h2>
                        <img className='imagenBanDescuento' src={priceDescuento} alt="precio descuento banner " />
                      </div>
                      <div className="boxPriceBasicDescuento">
                        <h2 className='priceBasicDescuento'>${priceTicketBasic - ( 5 * cantTicketsBasic)}</h2>
                      </div>
                  </div>



                  {/* ticket basic- compra */}

                  <div className="wrapperBotton-Tickets">
                      <div className="btnButton-Tickets" onClick={async () => connected? await buyBasicTicket() : await login()}>
                          <p >{connected? "BUY" : "CONNECT"}</p>
                          <span className="BorderTopBottom-Tickets "></span>
                          <span className="BorderLeftRight-Tickets "></span>
                      </div>
                      <SelectTokenBasic />
                  </div>



                   {/* ticket basic- cantidades/precio  */}

                  <div className="cantTicket-basic">
                        <button className='menos-basic' onClick={() => {
                            if (cantTicketsBasic > 1){
                              setCantTicketsBasic(cantTicketsBasic - 1) 
                            }
                            if(priceTicketBasic >= 40){
                              setPriceTicketBasic(priceTicketBasic - 20) 
                            }
                            }}> - 
                        </button>

                        <div className="contador-basic">
                            <p>{cantTicketsBasic}</p>
                        </div>

                        <button className='mas-basic' onClick={() => {
                            if(priceTicketBasic >= 20){
                              setPriceTicketBasic(priceTicketBasic + 20) 
                            }
                            setCantTicketsBasic(cantTicketsBasic + 1)
                          } }> + 
                        </button>
                  </div>
              </div>


              
              {/* ticket boost- descuentos aplicados */}

              <div className="boxTickets">
                  <img className='imgTicket imgTicket-boost' src={tiketBoost} alt="Ticket Ladder" />
                  <div className="priceBoost">
                      <div className="boxPrinceBoost">
                        <h2>${priceTicketBoost}</h2>
                        <img className='imagenBanDescuentoBoost' src={priceDescuento} alt="precio descuento banner " />
                      </div>
                  
                      <div className="boxPriceBoostDescuento">
                        <h2 className='priceBoostDescuento'>${priceTicketBoost - ( 5 * cantTicketsBoost) }</h2>
                      </div>
                  </div>



                  {/* ticket boost- compra */}

                  <div className="wrapperBotton-Tickets">
                      <div className="btnButton-Tickets" onClick={async () => connected? await buyBoostTicket() : await login()}>
                          <p>{connected? "BUY" : "CONNECT"}</p>
                          <span className="BorderTopBottom-Tickets "></span>
                          <span className="BorderLeftRight-Tickets "></span>
                      </div>
                      <SelectTokenBoost />
                  </div>


                  {/* ticket boost- cantidades/precio  */}
                  <div className="cantTicket-boost">
                        <button className='menos-boost' onClick={() => {

                          if (cantTicketsBoost > 1){
                            setCantTicketsBoost(cantTicketsBoost - 1)  
                          }
                          if(priceTicketBoost >= 70){
                            setPriceTicketBoost(priceTicketBoost - 35) 
                          }
                          }}> - 
                        </button>
                        <div className="contador-boost">
                            <p>{cantTicketsBoost}</p>
                        </div>
                        <button className='mas-boost' onClick={() => {
                          if(priceTicketBoost >= 30){
                            setPriceTicketBoost(priceTicketBoost + 35) 
                          }
                          setCantTicketsBoost(cantTicketsBoost + 1)
                          }}> + 
                        </button>
                  </div>
              </div>
          </div>



          {/* texto ladders  */}

          <div className="text-tickets">
            <div className="titleTicket">
                <h2>LADDER TICKETS </h2>
            </div>
            <div className="textoTicket">
                <p> Everything you need is here. Let's build your way to the top!  </p>
            </div>
        
        

          {/* boton de connectar wallet */}
            <div id="connectWallet" className="wrapperBotton-ticketSale-Connect ">
              <div className="btn-ticketSale-Connect" onClick={async () => connected? {} : await login()}>
                <p className='select-Connect' >{connected? truncateEthAddress(account[0]) : "Connect Wallet"}</p>
                {connected ? <input type="text" className="copyWallet" id='copyWallet' ></input> : null}
                <span className="BorderTopBottom-ticketSale-Connect  "></span>
                <span className="BorderLeftRight-ticketSale-Connect  "></span>
              </div>
            </div>
 

            {/* pasa los parametros al componente del codigo de descuento*/}
            
            <CodigoDescuento 
              referralCode={referralCode} 
              copyActive={copyActive} 
              checkRefCodeValid={checkRefCodeValid} 
              submitCodigoDescuento={submitCodigoDescuento} 
              codigoPropio= {codigoPropio}
              codigoIncorrecto = {codigoIncorrecto}
            /> 
            
          </div>
        </div>
    </div>
  )
}

export default TiketBuyPage;