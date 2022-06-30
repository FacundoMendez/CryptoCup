import React, {lazy} from 'react'
import "./privacyPolicy.css"

const NavTicket = lazy(() => import ('../../../tiketBuy/NavTickets/NavTickets'))
const Footer = lazy(() => import ('../Footer'))

const PrivacyPolicy = () => {
  return (

    <div className="containerPrivacy">
        <NavTicket/>
        <div className="boxPrivacy">
            <h4>CRYPTO CUP IS IN NO WAY ASSOCIATED TO FIFA OR ANY OF THEIR BRANDS</h4>

            <div className="titlePrivacy">
                <h2>
                     I. ASSUMPTION OF RISKS
                </h2>
            </div>
            <div className="textPrivacy">
                <p>
                    The User expressly acknowledges that: <br /><br />
                    <span>Yo.</span>  The prices of assets that are registered and traded on the Blockchain are particularly volatile. <br /><br />
                    <span>ii.</span> The value of the Tokens may fluctuate widely and may even be affected by the fluctuation of other digital assets that are not directly linked to QTR22. <br /><br />
                    <span>iii.</span> The company does not guarantee under any circumstances that the Crypto Cup Tokens or digital assets will maintain their value or that they will not be affected by large fluctuations, even leading to the substantial loss of the acquisition value or its entirety. <br /><br />
                    <span>IV.</span> The User will be solely responsible for determining the taxes that are applicable to their transactions. <br /><br />
                    <span>v.</span> The Platform does not store, send or receive Tokens. They are created and transferred on the Binance Smart Chain. <br /><br />
                    saw. There are risks associated with the use of cryptographic tokens, including, but not limited to, the risk of hardware, software, and Internet connections, the risk of the introduction of malicious software, and the risk that third parties may gain unauthorized access to information stored on it. her wallet. The company will not be responsible for any communication failures, interruptions, errors, distortions or delays that you may experience when using the Binance Smart Chain or any other network. <br /><br />
                    <span>vii.</span> Changes in the terms of use, updates or technology changes in the Binance Smart Chain may have a negative impact on the price of the Tokens, which is not the responsibility of Crypto Cup. <br /><br />
                </p>
            </div>

            <div className="titlePrivacy">
                <h2>
                <span>II. </span> USER WALLET
                </h2>
            </div>
            <div className="textPrivacy">
                <p>
                    Any acquisition of Tokens by the User from the Platform or external markets will be carried out through smart contracts on the Blokchain of the Binance Smart Chain network using a digital wallet. <br />
                    The transactions that the User makes with Crypto Cup will be through the Platform www.cryptocupqatar.io <br /><br />
                    In order to carry out any transaction, the User will have an account at https://www.cryptocupqatar.io which will be linked to his Account. Each User will have a virtual wallet associated with said account, where the payments made by the user from their own virtual wallet will be received. <br /><br />
                    The User is solely responsible for the custody of the access credentials, and must not share their passwords with third parties. Crypto Cup does not have the ability to reverse any transaction that the User has made through the use of smart contracts. <br /><br />
                    It is possible that the Binance Smart Chain network receives a fee for each transaction that the user makes, as well as commissions for the use of the network's smart contracts. The User acknowledges and accepts the fees and commissions that Binance Smart Chain applies. <br /><br />
                </p>
            </div>

            <div className="titlePrivacy">
                <h2>
                    I. TOKENS
                </h2>
            </div>
            <div className="textPrivacy">
                <p>
                    Crypto Cup uses different types of cryptographic tokens to represent virtual assets whose characteristics and functionalities are different.<br /><br />
                    a.i. NFT's
                    They are tokens that represent a unique and unrepeatable virtual asset (non-fungible tokens). They are identified as Token ERC721 (BEP721) on the Binance Smart Chain.<br /><br />
                    Each of the issued tokens will represent the characteristics determined by Crypto Cup (See Whitepaper).<br /><br />
                    Ownership of the NFT "Ticket" grants the user the right to use the functionalities of the platform called "Dapp" and qualify as a tournament player.<br /><br />
                    Likewise, the holder of the NFT will have the right to be rewarded with a prize, which will be determined by Crypto Cup only if they meet the requirements for this (See Whitepaper).<br /><br />
                    The NFTs may be transferred by the User to third parties only if Crypto Cup enables said option. In this case, the User assumes sole responsibility for the transaction, Crypto Cup lacking any intervention in the operation.<br /><br />
                    The User acknowledges that NFTs represent digital assets on the Binance Smart Chain, and are not backed by physical assets.<br /><br />
                </p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PrivacyPolicy