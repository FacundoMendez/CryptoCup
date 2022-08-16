import React, {lazy, Suspense, useState, useContext, useEffect} from 'react'
import { ethers } from 'ethers';
import { contractAddress, abi } from './utils'
import truncateEthAddress from 'truncate-eth-address';
import "./tiketBuy.css"
import priceDescuento from "./codigoDescuento/src/priceDescuento.jpg"
import Context from '../../context/Context'
import NoMetamask from './codigoDescuento/popupsErrors/noMetamask/NoMetamask';
import PopupEsperaBuy from './codigoDescuento/popupsErrors/popupEsperaBuy/PopupEsperaBuy';
import checkTokenBasic from './ticketsComponents/tokenBasic/checkTokenBasic';
import checkTokenBoost from './ticketsComponents/tokenBoost/checkTokenBoost';


/* import tiketBasico from "./src/tiketBasic.png"
import tiketBoost from "./src/tiketBoost.png"
import videoParticle from "./src/particle1P.mp4" */
/* import busdLogo from "./src/busdLogo.png"
import daiLogo from "./src/daiLogo.png"
import usdcLogo from "./src/usdcLogo.png"
import usdtLogo from "./src/usdtLogo.png" */



const TermsAndCondicionsPopup = lazy(() => import ('../../homePrincipal/header/termsAndCondicionsPopup/TermsAndCondicionsPopup'))
const VideoBuyBoost = lazy(() => import ("./ticketsComponents/tokenBoost/videoBuyBoost/VideoBuyBoost"))
const VideoBuyBasic = lazy(() => import ("./ticketsComponents/tokenBasic/videoCompra/videoBuyBasic/VideoBuyBasic"))
const NavTickets = lazy(() => import ("../NavTickets/NavTickets"))
const Spinner = lazy(() => import ('../../spinner/Spinner'))
const Social = lazy(() => import ("../../homePrincipal/header/home/social/Social"))
const CodigoDescuento = lazy(() => import ("./codigoDescuento/CodigoDescuento"))

const TiketBuyPage = () => {
  const context = useContext(Context)

  const [esMovil , setEsMovil] = useState(false)

  function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
  }

    useEffect(() => {
      if(isMobile()){
        setEsMovil(true)
      } else {
        setEsMovil(false)
      } 

      checkTokenBoost()
      checkTokenBasic()
    },[])

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
  const [chainIncorrecta, setChainIncorrecta] = useState(false)
  const [noMetamask, setNoMetamask] = useState(false)
  const [codigoIncorrecto, setCodigoIncorrecto] = useState(false)
  const [noBalance, setNoBalance] = useState(false)

  /* validacion de compra de tickets */
  const [loadingBuy, setLoadingBuy] = useState(false)
  const [buyTicketBasic, setBuyTicketBasic] = useState(false)
  const [buyTicketBoost, setBuyTicketBoost] = useState(false)

  /* validaciones de tickets (precio / cantidad) */

  const [cantTicketsBasic, setCantTicketsBasic] = useState(1)
  const [cantTicketsBoost, setCantTicketsBoost] = useState(1)
  const [priceTicketBasic, setPriceTicketBasic] = useState(20)
  const [priceTicketBoost, setPriceTicketBoost] = useState(35)
  const [tokenOptionSelect, setTokenOptionSelect] = useState(1)


  const changeChain = () => {
    window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [{
          chainId: "0x38",
          rpcUrls: ["https://bsc-dataseed.binance.org/"],
          chainName: "Binance Smart Chain",
          nativeCurrency: {
              name: "BNB",
              symbol: "BNB",
              decimals: 18
          },
          blockExplorerUrls: ["https://bscscan.com/"]
      }]
    });
  }

  const login = async () => {
    try {
      if(window.ethereum !== undefined) {
        const newProvider = new ethers.providers.Web3Provider(window.ethereum);
        const { chainId } = await newProvider.getNetwork();

        if(chainId === 4) {
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
          // Aca mostrar error que esta conectado en la chain incorrecta.
          setChainIncorrecta(true)
          setTimeout(function(){
            setChainIncorrecta(false)
          },5000)

          await changeChain();
        }

      } else {
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

    setLoadingBuy(true)

    const tx = await contract.mint(cantTicketsBasic, 4, 0, activeReferralCode) // Cantidad, Moneda, Tipo de Ticket, Referral Code
    .catch(e => {
      setLoadingBuy(false); // Aca se cancela la compra.
    });
    

    const receipt = await tx.wait()
    console.log(receipt);

    setLoadingBuy(false)
    setBuyTicketBasic(true);

    setTimeout(function(){ 
      setBuyTicketBasic(false); 
    }, 10000);

  }
  
  const buyBoostTicket = async () => {
    // Aca se deberia activar el timeout.

    setLoadingBuy(true)
    const tx = await contract.mint(cantTicketsBasic, 4, 0, activeReferralCode) // Cantidad, Moneda, Tipo de Ticket, Referral Code
    .catch(e => {
      setLoadingBuy(false); // Aca se cancela la compra.
    });

    const receipt = await tx.wait()
    console.log(receipt);

    setLoadingBuy(false)
    setBuyTicketBoost(true);

    setTimeout(function(){ 
      setBuyTicketBoost(false); 
    }, 10000);
  }

  const checkRefCodeValid = async (code) => {
    if (code) {
      if(code !== referralCode.toString()) {
        await contract.getReferralAddressFromCode(code)
        .then(res => {
          if (res != "0x0000000000000000000000000000000000000000") {
            setSubmitCodigoDescuento(true);    //aca verifica si el codigo de descuento es correcto
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

{  !esMovil  ?   <video className='particle-Tikets' src= " https://res.cloudinary.com/dvrxw8fbg/video/upload/v1660657005/CryptocupQatar/Home%20/particle1P_bhqtfr.mp4"/* {videoParticle}  */ preload='none' autoPlay loop muted  type="video/mp4"></video> : null  }

      
      {buyTicketBasic ?  <VideoBuyBasic /> : null}
      {buyTicketBoost ?  <VideoBuyBoost /> : null}
      {loadingBuy ? <PopupEsperaBuy /> : null}
      {noMetamask ? <NoMetamask noMetamask={noMetamask} textNoMetamask="Please Install Metamask!" /> : null}
      {chainIncorrecta ? <NoMetamask chainIncorrecta={chainIncorrecta}   textChainIncorrecta="Please connect to the Rinkeby Network!"/> : null }     {/* modificar network */}

      {noBalance ? <NoMetamask chainIncorrecta={chainIncorrecta}   textChainIncorrecta="Does not have the necessary balance"/> : null }    {/* balance  */}

      <div className="flexTickets">
          <div className="ticketsSale">
            <div className="boxBlurToken"></div>
            <div className="boxBlurTokenBoost"></div>
              <div className="boxTickets">


                 {/* ticket basic- descuentos aplicados */}

                  <img className='imgTicket imgTicket-basic' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660656671/CryptocupQatar/tickets/tiketBoost_rbpfe9.png"/* {tiketBasico} */ alt="Ticket Basic" />
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
                      
                      {/* seleccionar token */}
                      <div className="boxToken">
                          <div className="wrapperBotton-ticketSale " >

                              <div className="btn-ticketSale" >
                                  {tokenOptionSelect === 1 ? <img className='imgTokenSelect' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdcLogo_iz6l8u.png"/* {usdcLogo} */ alt="usdc Logo" /> : null}
                                  {tokenOptionSelect === 2 ? <img className='imgTokenSelect' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdtLogo_crllfx.png"/* {usdtLogo} */ alt="usdt Logo" /> : null}
                                  {tokenOptionSelect === 3 ? <img className='imgTokenSelect' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/busdLogo_fmii68.png"/* {busdLogo} */ alt="busd Logo" /> : null}
                                  {tokenOptionSelect === 4 ? <img className='imgTokenSelect' src=  "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/daiLogo_k9yreu.png"/* {daiLogo} */ alt="dai Logo" /> : null}

                                  <span className="BorderTopBottom-ticketSale  "></span>
                                  <span className="BorderLeftRight-ticketSale  "></span>  
                                  
                              </div>

                              <div className="radioToken">

                                      <label className="radio control-radio">
                                          <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdcLogo_iz6l8u.png"/* {usdcLogo} */ alt="Logo Dai" />
                                          <p>USDC</p>
                                          <input type="radio" value="option1-basic" readOnly={true} name="radioBasic" checked={tokenOptionSelect === 1} onClick={() => setTokenOptionSelect(1)}/>
                                          <div className="control_indicator"></div>
                                      </label>

                                      <label className="radio control-radio">
                                          <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdtLogo_crllfx.png"/* {usdtLogo} */ alt="Logo Dai" />
                                          <p>USDT</p>
                                          <input type="radio" value="option2-basic" readOnly={true} name="radioBasic" checked={tokenOptionSelect === 2} onClick={() => setTokenOptionSelect(2)}  />
                                          <div className="control_indicator"></div>
                                      </label>
                                      
                                      <label className="radio control-radio">
                                          <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/busdLogo_fmii68.png"/* {busdLogo} */ alt="Logo Dai" />
                                          <p>BUSD</p>
                                          <input type="radio" value="option3-basic" readOnly={true} name="radioBasic" checked={tokenOptionSelect === 3} onClick={() => setTokenOptionSelect(3)} />
                                          <div className="control_indicator"></div>
                                      </label>
                                      
                                      <label className="radio control-radio">
                                          <img className='LogoToken' src=  "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/daiLogo_k9yreu.png"/* {daiLogo}  */alt="Logo Dai" />
                                          <p>DAI</p>
                                          <input type="radio" value="option4-basic" readOnly={true} name="radioBasic" checked={tokenOptionSelect === 4} onClick={() => setTokenOptionSelect(4)} />
                                          <div className="control_indicator"></div>
                                      </label>
                                  </div>
                              </div>
                          </div>
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
                  <img className='imgTicket imgTicket-boost' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660656671/CryptocupQatar/tickets/tiketBasic_ymmkrm.png"/* {tiketBoost} */ alt="Ticket Ladder" />
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
                      
                       {/* seleccionar token */}
                      <div className="boxToken">
                          <div className="wrapperBotton-ticketSale-boost " >

                              <div className="btn-ticketSaleBoost" >
                                  {tokenOptionSelect === 1 ? <img className='imgTokenSelect' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdcLogo_iz6l8u.png"/* {usdcLogo} */alt="BusdToken" /> : null}
                                  {tokenOptionSelect === 2 ? <img className='imgTokenSelect' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdtLogo_crllfx.png"/* {usdtLogo} */alt="DaiToken" /> : null}
                                  {tokenOptionSelect === 3 ? <img className='imgTokenSelect' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/busdLogo_fmii68.png"/* {busdLogo} */alt="UsdcToken" /> : null}
                                  {tokenOptionSelect === 4 ? <img className='imgTokenSelect' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/daiLogo_k9yreu.png"/* {daiLogo} */ alt="UsdtToken" /> : null}

                                  <span className="BorderTopBottom-ticketSale  "></span>
                                  <span className="BorderLeftRight-ticketSale  "></span>
                              
                              </div>
                              <div className="radioTokenBoost">
                                  <label className="radio control-radio">
                                      <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdcLogo_iz6l8u.png"/* {usdcLogo} */ alt="Logo Dai" />
                                      <p>USDC</p>
                                      <input type="radio" value="option1-boost" readOnly={true} name="radioBoost" checked={tokenOptionSelect === 1} onClick={() => setTokenOptionSelect(1)}/>
                                      <div className="control_indicator"></div>
                                  </label>
                                  
                                  <label className="radio control-radio">
                                      <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdtLogo_crllfx.png"/* {usdtLogo} */ alt="Logo Dai" />
                                      <p>USDT</p>
                                      <input type="radio" value="option2-boost" readOnly={true} name="radioBoost" checked={tokenOptionSelect === 2} onClick={() => setTokenOptionSelect(2)}  />
                                      <div className="control_indicator"></div>
                                  </label>
                                  
                                  <label className="radio control-radio">
                                      <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/busdLogo_fmii68.png"/* {busdLogo} */ alt="Logo Dai" />
                                      <p>BUSD</p>
                                      <input type="radio" value="option3-boost" readOnly={true} name="radioBoost" checked={tokenOptionSelect === 3} onClick={() => setTokenOptionSelect(3)} />
                                      <div className="control_indicator"></div>
                                  </label>
                                  
                                  <label className="radio control-radio">
                                      <img className='LogoToken' src=  "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660658224/CryptocupQatar/TICKETS%20BUY/home%20tickets/daiLogo_k9yreu.png"/* {daiLogo} */ alt="Logo Dai" />
                                      <p>DAI</p>
                                      <input type="radio" value="option4-boost" readOnly={true} name="radioBoost" checked={tokenOptionSelect === 4} onClick={() => setTokenOptionSelect(4)} />
                                      <div className="control_indicator"></div>
                                  </label>
                              </div>
                          </div>
                      </div>
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
              connected = {connected}
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