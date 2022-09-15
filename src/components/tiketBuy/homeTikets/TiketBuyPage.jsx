import React, {lazy, useState, useContext, useEffect, Component} from 'react'
import { useSearchParams } from "react-router-dom";
import { ethers } from 'ethers';
import { contractAddress, abi, tokenAddresses, ERC20Abi, tokenAddress } from './utils'
import truncateEthAddress from 'truncate-eth-address';
import "./tiketBuy.css"
import priceDescuento from "./codigoDescuento/src/priceDescuento.jpg"
import Context from '../../context/Context'
import NoMetamask from './codigoDescuento/popupsErrors/noMetamask/NoMetamask';
import PopupEsperaBuy from './codigoDescuento/popupsErrors/popupEsperaBuy/PopupEsperaBuy';
import checkTokenBasic from './ticketsComponents/tokenBasic/checkTokenBasic';
import checkTokenBoost from './ticketsComponents/tokenBoost/checkTokenBoost';
import Favicon from 'react-favicon';
import gsap from 'gsap';
import {FormattedMessage} from 'react-intl';
import TimerTickets from './ticketsComponents/timerTickets/TimerTickets';

const NavTicket = lazy(() => import ('../NavTickets/NavTickets'))
const TermsAndCondicionsPopup = lazy(() => import ('../../homePrincipal/header/termsAndCondicionsPopup/TermsAndCondicionsPopup'))
const Social = lazy(() => import ("../../homePrincipal/header/home/social/Social"))
const CodigoDescuento = lazy(() => import ("./codigoDescuento/CodigoDescuento"))

const TiketBuyPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let checkedCode = false;

  const context = useContext(Context)

  const videoBuyActive = document.querySelector(".videoBuyActive")
  const flexTickets = document.querySelector(".flexTickets")
  
    useEffect(() => {
      checkTokenBoost()
      checkTokenBasic()

      gsap.from(".navBallModel",{
        opacity:0,
        scale:.2,
        duration:1.2,
        delay:0
      })

      if(!checkedCode){
        // chequear si hay codigo de descuento. en caso de que haya, hay que chequear si es valido. si es valido hay que mostrar los descuentos.
        const referralCodee = searchParams.get("r")
        if(referralCodee) {
          checkRefCodeValid(referralCodee);
        }
        checkedCode = true;
      }

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

      if(window.ethereum !== undefined) {
        const newProvider = new ethers.providers.Web3Provider(window.ethereum);
        const { chainId } = await newProvider.getNetwork();

        window.ethereum.on('accountsChanged', async accounts => {
          await login();
        });

        window.ethereum.on('networkChanged', async accounts => {
          await login();
        });

        if(chainId === 3) {
          const newAccount = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const newSigner = await newProvider.getSigner();
          const newContract = await new ethers.Contract( contractAddress , abi , newSigner );

          await newContract.getReferralCodeFromAddress(newAccount[0])
          .then(res => {
            if (res !== 0) { // si el usuario tiene un codigo de referencia
              console.log(res);
              setCopyActive(true);
              setReferralCode(res);
            }  
            else {
              setCopyActive(false);
            }
          });

          setProvider(newProvider);
          setAccount(newAccount);
          setSigner(newSigner);
          setContract(newContract);
          setConnected(true);
        } else {
          // Aca mostrar error que esta conectado en la chain incorrecta.
          setCopyActive(false);
          setReferralCode(0);
          setSubmitCodigoDescuento(false);
          setActiveReferralCode(0);
          setProvider(undefined);
          setAccount(undefined);
          setSigner(undefined);
          setContract(undefined);
          setConnected(false);

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


  }

  const checkReferral = async () => {
    await contract.getReferralCodeFromAddress(account[0])
    .then(res => {
      if (res !== 0) { // si el usuario tiene un codigo de referencia
        console.log(res);
        setCopyActive(true);
        setReferralCode(res);
      }  
      else {
        setCopyActive(false);
      }
    });
  }

  const buyBasicTicket = async () => {
    setLoadingBuy(true)

    // const tokenAddress = tokenAddresses[tokenOptionSelect - 1].address;
    const tokenAddresss = tokenAddress;
    const tokenContract = await new ethers.Contract( tokenAddresss , ERC20Abi , signer );
    const tokenDecimals = await tokenContract.decimals();

    const enoughBalance = await tokenContract.balanceOf(account[0]).then(res => {
      if((res / (10 ** tokenDecimals)) < (cantTicketsBasic * priceTicketBasic)) {
        setNoBalance(true)
        setTimeout(function(){
          setNoBalance(false)
        },5000)
        return false;
      } else {
        return true;
      }
    });

    if(enoughBalance){

      await tokenContract.allowance(account[0], contractAddress).then(async res => {
        if((res / (10 ** tokenDecimals)) < (cantTicketsBasic * priceTicketBasic)) {
          const txAllowance = await tokenContract.approve(contractAddress, ethers.utils.parseEther("1000000")).catch(e => {
            // Aca se tiene que mostrar un error de que el usuario rechazo la transaccion.
            console.log(e);
          })

          const receipt = await txAllowance.wait()
        }
      });

      const tx = await contract.mint(cantTicketsBasic, 4, 0, activeReferralCode) // Cantidad, Moneda, Tipo de Ticket, Referral Code
      .catch(e => {
        setLoadingBuy(false);
      });
      

      const receipt = await tx.wait()
      console.log(receipt);

      setLoadingBuy(false)
      setBuyTicketBasic(true);
      checkReferral();

      /* video basic compra */
        videoBuyActive.classList.add("videoCompra_active")
        flexTickets.classList.add("flexTickets_active")

        videoBuyActive.innerHTML= ` <video className='basicBuyVideo' id="basicBuyVideo" src="https://res.cloudinary.com/dvrxw8fbg/video/upload/c_scale,h_1080,q_auto:best,w_1920/v1663019654/CryptocupQatar/TICKETS%20BUY/home%20tickets/SobreBasic_w3hre8.mp4" autoPlay type="video/mp4" ></video> `

        document.getElementById('basicBuyVideo').addEventListener('ended',myHandler,false);

        function myHandler(e) {
          videoBuyActive.innerHTML=""
          setBuyTicketBasic(false); 
          videoBuyActive.classList.remove("videoCompra_active")
          flexTickets.classList.remove("flexTickets_active")
        }

    } else {
      setLoadingBuy(false)
      videoBuyActive.innerHTML=""
      setBuyTicketBasic(false); 
      videoBuyActive.classList.remove("videoCompra_active")
      flexTickets.classList.remove("flexTickets_active")
    }

  }
  
  const buyBoostTicket = async () => {
    setLoadingBuy(true)

    // const tokenAddress = tokenAddresses[tokenOptionSelect - 1].address;
    const tokenAddresss = tokenAddress;
    const tokenContract = await new ethers.Contract( tokenAddresss , ERC20Abi , signer );
    const tokenDecimals = await tokenContract.decimals();

    const enoughBalance = await tokenContract.balanceOf(account[0]).then(res => {
      if((res / (10 ** tokenDecimals)) < (cantTicketsBoost * priceTicketBoost)) {
        setNoBalance(true)
        setTimeout(function(){
          setNoBalance(false)
        },5000)
        return false;
      } else {
        return true;
      }
    });

    if(enoughBalance){

      await tokenContract.allowance(account[0], contractAddress).then(async res => {
        if((res / (10 ** tokenDecimals)) < (cantTicketsBoost * priceTicketBoost)) {
          const txAllowance = await tokenContract.approve(contractAddress, ethers.utils.parseEther("1000000")).catch(e => {
            // Aca se tiene que mostrar un error de que el usuario rechazo la transaccion.
            console.log(e);
          })

          const receipt = await txAllowance.wait()
        }
      });

      const tx = await contract.mint(cantTicketsBoost, 4, 1, activeReferralCode) // Cantidad, Moneda, Tipo de Ticket, Referral Code
      .catch(e => {
        setLoadingBuy(false);
      });

      const receipt = await tx.wait()
      console.log(receipt);

      setLoadingBuy(false)
      setBuyTicketBoost(true);
      checkReferral();

        videoBuyActive.classList.add("videoCompra_active")
        flexTickets.classList.add("flexTickets_active")
        videoBuyActive.innerHTML= ` <video className='boostBuyVideo' id="boostBuyVideo" src="https://res.cloudinary.com/dvrxw8fbg/video/upload/c_scale,h_1080,q_80,w_1920/v1663019658/CryptocupQatar/TICKETS%20BUY/home%20tickets/SobreBoost_b8oihl.mp4" preload='none' autoPlay type="video/mp4" ></video>  `

        document.getElementById('boostBuyVideo').addEventListener('ended',myHandler,false);

        function myHandler(e) {
          videoBuyActive.innerHTML=""
          setBuyTicketBoost(false); 
          videoBuyActive.classList.remove("videoCompra_active")
          flexTickets.classList.remove("flexTickets_active")
        }

    } else {
      setBuyTicketBoost(false)
      videoBuyActive.innerHTML=""
      setBuyTicketBoost(false); 
      videoBuyActive.classList.remove("videoCompra_active")
      flexTickets.classList.remove("flexTickets_active")
    }
  }

  const checkRefCodeValid = async (code) => {
    console.log(code)
    if (code >= 0) {
      if(code !== referralCode.toString()) {
        await fetch('http://cryptocupapi-env.eba-fta9xpxj.us-east-1.elasticbeanstalk.com/api/V1/utils/verifyReferralCode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({code})
        })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          if (res == true) {
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

    <>
      { !context.checkTerminosyCondiciones ? <TermsAndCondicionsPopup /> : null}

      <NavTicket/>
      <Social />
      <Favicon url="https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:good/v1660656597/CryptocupQatar/present/Logo_br3xr2.png"></Favicon>
    
    
    <div className="containerTiketsBuy" id='ticketsContainer'>
      <div className="videoCompra">
        <div className="videoBuyActive"></div>
      </div>

      {loadingBuy ? <PopupEsperaBuy /> : null}
      {noMetamask ? <NoMetamask noMetamask={noMetamask} /> : null}
      {chainIncorrecta ? <NoMetamask chainIncorrecta={chainIncorrecta}/> : null }    
      {noBalance ? <NoMetamask noBalance={noBalance}  /> : null } 

      <div className="flexTickets">

          <div className="ticketsSale">
              <div className="boxBlurToken"></div>
              <div className="boxBlurTokenBoost"></div>
              <div className="boxTickets">

                 {/* ticket basic- descuentos aplicados */}
                 
                  <img className='imgTicket imgTicket-basic' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_806,q_auto:best,w_354/v1660656671/CryptocupQatar/tickets/tiketBasic_ymmkrm.png"/* {tiketBasico} */ alt="Ticket Basic" />
                  <div className="priceBasic">
                      <div className="boxPrinceBasic">
                        <h2 className='priceBasicOrigin'>${priceTicketBasic}</h2>
                        <img className='imagenBanDescuento' src={priceDescuento} alt="precio descuento banner " />
                      </div>
                      <div className="boxPriceBasicDescuento">
                        <h2 className='priceBasicDescuento'>${priceTicketBasic - ( 4 * cantTicketsBasic)}</h2>
                      </div>
                  </div>


                  {/* ticket basic- compra */}

                  <div className="wrapperBotton-Tickets">
                      <div className="btnButton-Tickets" onClick={async () => connected? await buyBasicTicket() : await login()}>
                          <p >{connected? 
                            <FormattedMessage
                                id="ticketBuy-buy"
                                defaultMessage="BUY"
                            /> 
                            : 
                            <FormattedMessage
                              id="ticketBuy-connect"
                              defaultMessage="CONNECT"
                            /> 
                          }</p>
                      </div>
                      
                      {/* seleccionar token */}
                      <div className="boxToken">

                          <div className="wrapperBotton-ticketSale " >

                              <div className="btn-ticketSale" >
                                  {tokenOptionSelect === 2 ? <img className='imgTokenSelect' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdcLogo_iz6l8u_kf6qgl.png"/* {usdcLogo} */ alt="usdc Logo" /> : null}
                                  {tokenOptionSelect === 1 ? <img className='imgTokenSelect' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdtLogo_crllfx_uyuhcp.png"/* {usdtLogo} */ alt="usdt Logo" /> : null}
                                  {tokenOptionSelect === 3 ? <img className='imgTokenSelect' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/busdLogo_fmii68_iraojc.png"/* {busdLogo} */ alt="busd Logo" /> : null}
                                  {tokenOptionSelect === 4 ? <img className='imgTokenSelect' src=  "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/daiLogo_k9yreu_qlhlzd.png"/* {daiLogo} */ alt="dai Logo" /> : null}
                              </div>
                              <div className="radioToken">
                                  <label className="radio control-radio">
                                      <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdcLogo_iz6l8u_kf6qgl.png"/* {usdcLogo} */ alt="Logo Dai" />
                                      <p>USDC</p>
                                      <input type="radio" value="option2-basic" readOnly={true} name="radioBasic" checked={tokenOptionSelect === 2} onClick={() => setTokenOptionSelect(2)}/>
                                      <div className="control_indicator"></div>
                                  </label>

                                  <label className="radio control-radio">
                                      <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdtLogo_crllfx_uyuhcp.png"/* {usdtLogo} */ alt="Logo Dai" />
                                      <p>USDT</p>
                                      <input type="radio" value="option1-basic" readOnly={true} name="radioBasic" checked={tokenOptionSelect === 1} onClick={() => setTokenOptionSelect(1)}  />
                                      <div className="control_indicator"></div>
                                  </label>
                                  
                                  <label className="radio control-radio">
                                      <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/busdLogo_fmii68_iraojc.png"/* {busdLogo} */ alt="Logo Dai" />
                                      <p>BUSD</p>
                                      <input type="radio" value="option3-basic" readOnly={true} name="radioBasic" checked={tokenOptionSelect === 3} onClick={() => setTokenOptionSelect(3)} />
                                      <div className="control_indicator"></div>
                                  </label>
                                  
                                  <label className="radio control-radio">
                                      <img className='LogoToken' src=  "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/daiLogo_k9yreu_qlhlzd.png"/* {daiLogo}  */alt="Logo Dai" />
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
                  <img className='imgTicket imgTicket-boost' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_806,q_auto:best,w_354/v1660656671/CryptocupQatar/tickets/tiketBoost_rbpfe9.png"/* {tiketBoost} */ alt="Ticket Ladder" />
                  <div className="priceBoost">
                      <div className="boxPrinceBoost">
                        <h2>${priceTicketBoost}</h2>
                        <img className='imagenBanDescuentoBoost' src={priceDescuento} alt="precio descuento banner " />
                      </div>
                  
                      <div className="boxPriceBoostDescuento">
                        <h2 className='priceBoostDescuento'>${priceTicketBoost - ( 7 * cantTicketsBoost) }</h2>
                      </div>
                  </div>



                  {/* ticket boost- compra */}

                  <div className="wrapperBotton-Tickets">
                      <div className="btnButton-Tickets" onClick={async () => connected? await buyBoostTicket() : await login()}>
                          <p >{connected? 
                                <FormattedMessage
                                    id="ticketBuy-buy"
                                    defaultMessage="BUY"
                                /> 
                                : 
                                <FormattedMessage
                                  id="ticketBuy-connect"
                                  defaultMessage="CONNECT"
                                /> 
                          }</p>
                      </div>
                      
                       {/* seleccionar token */}
                      <div className="boxToken">
                          <div className="wrapperBotton-ticketSale-boost " >
                              <div className="btn-ticketSaleBoost" >
                                  {tokenOptionSelect === 2 ? <img className='imgTokenSelect' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdcLogo_iz6l8u_kf6qgl.png"/* {usdcLogo} */ alt="usdc Logo" /> : null}
                                  {tokenOptionSelect === 1 ? <img className='imgTokenSelect' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdtLogo_crllfx_uyuhcp.png"/* {usdtLogo} */ alt="usdt Logo" /> : null}
                                  {tokenOptionSelect === 3 ? <img className='imgTokenSelect' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/busdLogo_fmii68_iraojc.png"/* {busdLogo} */ alt="busd Logo" /> : null}
                                  {tokenOptionSelect === 4 ? <img className='imgTokenSelect' src=  "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/daiLogo_k9yreu_qlhlzd.png"/* {daiLogo} */ alt="dai Logo" /> : null}
                              </div>
                          </div>
                          <div className="radioTokenBoost">
                              <label className="radio control-radio">
                                  <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdcLogo_iz6l8u_kf6qgl.png"/* {usdcLogo} */ alt="Logo Dai" />
                                  <p>USDC</p>
                                  <input type="radio" value="option2-boost" readOnly={true} name="radioBoost" checked={tokenOptionSelect === 2} onClick={() => setTokenOptionSelect(2)}/>
                                  <div className="control_indicator"></div>
                              </label>
                              
                              <label className="radio control-radio">
                                  <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/usdtLogo_crllfx_uyuhcp.png"/* {usdtLogo} */ alt="Logo Dai" />
                                  <p>USDT</p>
                                  <input type="radio" value="option1-boost" readOnly={true} name="radioBoost" checked={tokenOptionSelect === 1} onClick={() => setTokenOptionSelect(1)}  />
                                  <div className="control_indicator"></div>
                              </label>
                              
                              <label className="radio control-radio">
                                  <img className='LogoToken' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/busdLogo_fmii68_iraojc.png"/* {busdLogo} */ alt="Logo Dai" />
                                  <p>BUSD</p>
                                  <input type="radio" value="option3-boost" readOnly={true} name="radioBoost" checked={tokenOptionSelect === 3} onClick={() => setTokenOptionSelect(3)} />
                                  <div className="control_indicator"></div>
                              </label>
                              
                              <label className="radio control-radio">
                                  <img className='LogoToken' src=  "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_200,q_auto:eco,w_200/v1663108976/CryptocupQatar/TICKETS%20BUY/home%20tickets/daiLogo_k9yreu_qlhlzd.png"/* {daiLogo} */ alt="Logo Dai" />
                                  <p>DAI</p>
                                  <input type="radio" value="option4-boost" readOnly={true} name="radioBoost" checked={tokenOptionSelect === 4} onClick={() => setTokenOptionSelect(4)} />
                                  <div className="control_indicator"></div>
                              </label>
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
                <h2>
                  <FormattedMessage
                      id="ticketBuy-title"
                      defaultMessage="LADDER TICKETS "
                    /> 
                </h2>
            </div>
            <div className="textoTicket">
                <p>
                  <FormattedMessage
                      id="ticketBuy-texto"
                      defaultMessage="Everything you need is here. Let's build your way to the top!"
                    /> 
                </p>
            </div>
        
        

          {/* boton de connectar wallet */}
            <div id="connectWallet" className="wrapperBotton-ticketSale-Connect ">
              <div className="btn-ticketSale-Connect" onClick={async () => connected && context.checkTerminosyCondiciones ? {} : await login()}>

                {/* ACA AGREGAR VALIDACION DEL LOCAL STORAGE */}

                <p className='select-Connect' >
                  {connected? 
                    truncateEthAddress(account[0]) 
                    : 
                    <FormattedMessage
                      id="ticketBuy-connectWallet"
                      defaultMessage="CONNECT WALLET"
                    /> }
                </p>

                {connected ? <input type="text" className="copyWallet" id='copyWallet' ></input> : null}
               
              </div>
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
          <TimerTickets/>
          </div>
        </div>
    </div>
  </>
  )
}

export default TiketBuyPage;