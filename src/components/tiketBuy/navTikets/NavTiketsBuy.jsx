import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncional from '../../homePrincipal/header/nav/navFuncional';
import "../../homePrincipal/header/nav/NavHeader"
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
            <nav className="nav">
   
                <img className='navBack' src={imgNav} alt="nav background" />
                <button className="nav-toggle" aria-label="Abrir menú" onClick={navFuncional}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                
                <ul className="navVisible nav-menu navIzquierda">
                    
                    <li className="nav-menu-item homeIzquierda" >
                        <a href="/" className="nav-menu-link nav-link">
                            Home
                        </a>
                    </li>
          
                    <li className="nav-menu-item">
                        <a href="/" className="nav-menu-link nav-link">
                            Tickets
                        </a>
                    </li>
                    
                    <li className="nav-menu-item ">
                        <a href="https://crypto-cup.gitbook.io/crypto-cup/crypto-cup" target="_blank"  rel="noopener noreferrer" className="nav-menu-link nav-link">
                            Whitepaper
                        </a>
                    </li>

                    <a href="/Dapp" className="nav-menu-link nav-link dappIzquierda ">
                        <div className="wrapperBottonBtn ">
                            <div className="btnButtonNav">
                                <p>Dapp</p>
                                <span className="BorderTopBottomNav "></span>
                                <span className="BorderLeftRightNav "></span>
                            </div>
                        </div>
                    </a>

                </ul>

                <canvas className='navBallModel'></canvas>  

                

                <ul className='navDerecha'>

                    <li className="nav-menu-item">
                        <a href="/" className="nav-menu-link nav-link">
                            Home
                        </a>
                    </li>
          
                    <li className="nav-menu-item">
                        <a href="/" className="nav-menu-link nav-link">
                            Roadmap
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
