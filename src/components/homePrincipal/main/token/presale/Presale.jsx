import { ethers } from 'ethers'
import React ,{useState, useEffect, Suspense} from 'react'
import Spinner from '../../../../spinner/Spinner'
import { ERC20Abi, icoAbi, icoAddress, tokenAddresses } from '../../../../tiketBuy/homeTikets/utils'
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

    const [amountToBuy, setAmountToBuy] = useState(0);

    const [accumulated , setAccumulated] = useState(0)       //cantidad en $ 
    const [porcentaje , setPorcentaje] = useState("0")      //cantidad en %

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

            const soldTokens = await (await newContract.icoSoldTokens()).toNumber();
            const soldPercentage = await (await newContract.icoSoldTokensPercentage()).toNumber();
            const totalRaised = soldTokens * 0.0038;

            setAccumulated(totalRaised);
            setPorcentaje(soldPercentage);

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

    const buyTokens = async (amount, currency) => {
      console.log(amount / 0.0038)
      console.log(currency)
        if(contract !== undefined) {

          
          const tokenAddress = tokenAddresses[currency].address;
          const tokenContract = await new ethers.Contract( tokenAddress , ERC20Abi , signer );
          const tokenDecimals = await tokenContract.decimals();

          console.log(currency)
          console.log(tokenAddress)

          const enoughBalance = await tokenContract.balanceOf(account[0]).then(res => {
            console.log(res)

            if((res / (10 ** tokenDecimals)) < amount) {
              return false;
            } else {
              return true;
            }
          });

          if(enoughBalance){


            await tokenContract.allowance(account[0], "0xabFb604b655Bb34166a7da800b738D64c8aDdf4F").then(async res => {
              console.log(res)
              if((res / (10 ** tokenDecimals)) < amount) {
                const txAllowance = await tokenContract.approve("0xabFb604b655Bb34166a7da800b738D64c8aDdf4F", ethers.utils.parseEther("1000000")).catch(e => {
                  // Aca se tiene que mostrar un error de que el usuario rechazo la transaccion.
                  console.log(e);
                })
      
                const receipt = await txAllowance.wait()
              }
            });

            const tx = await contract.buyTokens(Math.round(amount / 0.0038), currency);
            await tx.wait();

          }
          
        }
    }


  return (
    <Suspense fallback={Spinner}>
        <div className="containerPresale">
            <NavTicket/>
            <div className="boxPresale">
                
                <h2>Presale 1</h2>
                <h3>Ends in:</h3>
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

                <p className='user_buy_wallet'><strong>Capped FCFS with Parcel Limit:</strong>&nbsp; &nbsp; Min buy 5$ - Max 5000$ </p>

                {connected ? 
                    <ConnectPresale buyTokens={buyTokens} />
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