import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncionalTickets from './navFuncionalTickets';
import imgNav from "../../homePrincipal/header/nav/src/navBack.png"
import navBallModel from '../../homePrincipal/header/nav/modelBall';
import "./navTikets.css"
import logoMetamask from "../src/logoMetamask.png"
 

function NavTikets() {

    useEffect(()=>{
        navBallModel()
    },[])

    return (
        <header className="header">
            <nav className="nav-Metamask">
   
                <img className='navBack-Metamask' src={imgNav} alt="nav background" />
                <button className="nav-toggle-Metamask" aria-label="Abrir menú" onClick={navFuncionalTickets}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                
                <ul className="navVisible-Metamask nav-menu-Metamask navIzquierda-Metamask">
                    
                    <li className="nav-menu-item-Metamask " >
                        <a href="/" className="nav-menu-link-Metamask nav-link-Metamask">
                            Home
                        </a>
                    </li>

                    <li className="nav-menu-item-Metamask ">
                        <a href="/" className="nav-menu-link-Metamask nav-link-Metamask">
                            Tickets
                        </a>
                    </li>

                    <li className="nav-menu-item-Metamask movile-Metamask">
                        <a href="/" className="nav-menu-link-Metamask nav-link-Metamask">
                            Roadmap
                        </a>
                    </li>

                    <li className="nav-menu-item-Metamask movile-Metamask">
                        <a href="https://crypto-cup.gitbook.io/crypto-cup/crypto-cup" target="_blank"  rel="noopener noreferrer" className="nav-menu-link-Metamask nav-link-Metamask">
                            Whitepaper
                        </a>
                    </li>
                    
                    <div id='metamask' className="wrapperBottonBtn-Metmask movile-Metamask">
                        <div className="btnButtonNav-Metmask">
                            <img className='logoMetamask' src={logoMetamask} alt="logoMetamask" />
                            <p>METAMASK</p>
                            <span className="BorderTopBottomNav-Metmask "></span>
                            <span className="BorderLeftRightNav-Metmask "></span>
                        </div>
                    </div>

                </ul>

                <canvas className='navBallModel'></canvas>  

                <ul className='navDerecha-Metamask'>
         
                    <li className="nav-menu-item-Metamask">
                        <a href="/" className="nav-menu-link-Metamask nav-link-Metamask">
                            Roadmap
                        </a>
                    </li>

                    <li className="nav-menu-item-Metamask ">
                        <a href="https://crypto-cup.gitbook.io/crypto-cup/crypto-cup" target="_blank"  rel="noopener noreferrer" className="nav-menu-link-Metamask nav-link-Metamask">
                            Whitepaper
                        </a>
                    </li>
                    
                    <div id='metamask' className="wrapperBottonBtn-Metmask">
                        <div className="btnButtonNav-Metmask">
                            <img className='logoMetamask' src={logoMetamask} alt="logoMetamask" />
                            <p>METAMASK</p>
                            <span className="BorderTopBottomNav-Metmask "></span>
                            <span className="BorderLeftRightNav-Metmask "></span>
                        </div>
                    </div>
                </ul>

            </nav>
        </header>
    );
}


export default NavTikets;
