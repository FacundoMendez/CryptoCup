import { ethers } from 'ethers'
import React ,{useState, useEffect, Suspense} from 'react'
import Spinner from '../../../../spinner/Spinner'
import NavTicket from '../../../../tiketBuy/NavTickets/NavTickets'
import TimerPresaleToken from '../timerPresaleToken/TimerPresaleToken'
import ConnectPresale from './connectPresale/ConnectPresale'
import "./presale.css"



const Presale = () => {
    /* validaciones de coneccion blockchain */

    const [provider, setProvider] = useState(undefined);
    const [connected, setConnected] = useState(false);
    const [contract, setContract] = useState(false);
    const [account, setAccount] = useState(undefined);
    const [signer, setSigner] = useState(undefined);

    const [accumulated , setAccumulated] = useState(0)       //cantidad en $ 
    const [porcentaje , setPorcentaje] = useState("0")      //cantidad en %

    const [connect , setConnect] = useState(false)

	const [style, setStyle] = useState({})

    useEffect(() => {
		const newStyle = {
			opacity: 1,
			width: `${porcentaje}%`
		}
        setStyle(newStyle);

    },[porcentaje])

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
  
          if(chainId === 56) {
            const newAccount = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const newSigner = await newProvider.getSigner();
            const newContract = await new ethers.Contract( icoAddress , icoAbi , newSigner );
  
            setProvider(newProvider);
            setAccount(newAccount);
            setSigner(newSigner);
            setContract(newContract);
            setConnected(true);
          } else {
            setProvider(undefined);
            setAccount(undefined);
            setSigner(undefined);
            setContract(undefined);
            setConnected(false);
  
            await changeChain();
          }
  
        }
  
    }


  return (
    <Suspense fallback={Spinner}>
        <div className="containerPresale">
            <NavTicket/>
            <div className="boxPresale">
                
                <h2>Presale 1</h2>
                <h3>Starts in:</h3>
                <TimerPresaleToken/>

                <div className="box_cct">
                    <p> <strong>1 CCT =</strong> &nbsp; 0.0038 USDT</p>
                    <p><strong>USDT Raised:</strong> &nbsp;  {accumulated} / 304.000 USDT</p>
                </div>


                <div className="progress">
                
                <div className="soft_cap_progress"></div>
                <div className="soft_hard_progress"></div>
                    <div className="progress-done" style={style}>
                        <p>{porcentaje}%</p>
                    </div>
                </div>

                <p className='note_presale'>Note: if the soft cap is not reached, there will be a refund to the contributors.</p>

                <div className="soft">
                    <p><strong>Soft Cap: </strong>&nbsp; 50.000 USDT</p>
                    <p className='hard_cap' ><strong>Hard Cap:</strong>&nbsp;  972.000 USDT</p>
                </div>

                <p className='user_buy_wallet'><strong>Capped FCFS with Parcel Limit:</strong>&nbsp; &nbsp; Min buy 10$ - Max 5000$ </p>

                {connect ? 
                    <ConnectPresale/>
                    :
                    <div className="connect" onClick={() => login()}>
                        <p>Connect</p>
                    </div>
                }
            </div>
        </div>
    </Suspense>
  )
}

export default Presale