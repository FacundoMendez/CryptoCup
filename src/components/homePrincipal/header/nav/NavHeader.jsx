import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncional from './navFuncional';
import "./nav.css";
import navBallModel from './modelBall';
import navOcultar from './navOcultar';
import commingDapp from './comingDapp';
import {FormattedMessage} from 'react-intl';
import Langs from './langComponent/Langs';


function NavHeader() {

    useEffect(()=>{
        navBallModel()
        commingDapp()
        navOcultar()
    },[])

    return (
        <header className="header">
            <div className="navBlur"></div>
            <nav className="nav">
                <img className='navBack' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_93,q_auto:low,w_1614/v1660656832/CryptocupQatar/nav/navBack1_ymcnj5.webp"/* {imgNav}  */alt="nav background" />
                
                <button className="nav-toggle" aria-label="Abrir menú" onClick={navFuncional}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                
                <ul className="navVisible nav-menu navIzquierda">

                    <li>
                        <Langs/>
                    </li>
                    
                    <li className="nav-menu-item " >
                        <a href="#home" className="nav-menu-link nav-link">
                            <FormattedMessage
                                id="nav-home"
                                defaultMessage="Home"
                            />
                        </a>
                    </li>
          
                    <li className="nav-menu-item">
                        <a href="/tickets"  className="nav-menu-link nav-link"> 
                            <FormattedMessage
                                id="nav-tickets"
                                defaultMessage="Tickets"
                            />
                        </a>
                    </li>
                    

                    <li className="nav-menu-item navMovile">
                        <a href="#roadmap" className="nav-menu-link nav-link">
                            <FormattedMessage
                                id="nav-roadmap"
                                defaultMessage="Roadmap"
                            />
                        </a>
                    </li>

                    <li className="nav-menu-item navMovile">
                        <a href="https://crypto-cup.gitbook.io/crypto-cup/crypto-cup"  target="_blank"  rel="noopener noreferrer" className="nav-menu-link nav-link">
                            <FormattedMessage
                                id="nav-whitepaper"
                                defaultMessage="Whitepaper"
                            />
                        </a >
                    </li>
                

                    <li>
                        <div className="wrapperBottonBtn navMovile">
                            <div className="btnButtonNav">
                                <p >Dapp</p>
                                <span className="BorderTopBottomNav "></span>
                                <span className="BorderLeftRightNav "></span>
                            </div>
                            
                        </div>
                    </li>
                </ul>


                <canvas className='navBallModel'></canvas>  


                <ul className='navDerecha'>
          
                    <li className="nav-menu-item">
                        <a href="#roadmap" className="nav-menu-link nav-link">
                            <FormattedMessage
                                id="nav-roadmap"
                                defaultMessage="Roadmap"
                            />
                        </a>
                    </li>
                    
                    <li className="nav-menu-item ">
                        <a href="https://crypto-cup.gitbook.io/crypto-cup/crypto-cup"  target="_blank"  rel="noopener noreferrer" className="nav-menu-link nav-link">
                            <FormattedMessage
                                id="nav-whitepaper"
                                defaultMessage="Whitepaper"
                            />
                        </a>
                    </li>
                
                    <li>
                        <div className="lineDappButton"></div>
                        <p className='dappTitleButton'>DAPP</p>
                        <p className='comingDapp'>
                            <FormattedMessage
                                id="nav-comingSoon"
                                defaultMessage="comingSoon"
                            />

                        </p>
                    </li>
                </ul>

            </nav>
        </header>
    );
}


export default NavHeader;
