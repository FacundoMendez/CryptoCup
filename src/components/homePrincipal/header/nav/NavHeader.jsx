import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncional from './navFuncional';
import "./nav.css";
import navBallModel from './modelBall';
import imgNav from "./src/navBack.png";
import navOcultar from './navOcultar';
import commingDapp from './comingDapp';

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

                <img className='navBack' src={imgNav} alt="nav background" />
                <button className="nav-toggle" aria-label="Abrir menú" onClick={navFuncional}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                
                <ul className="navVisible nav-menu navIzquierda">
                    {/* <Idiomas /> */}
                    
                    <li className="nav-menu-item " >
                        <a href="#home" className="nav-menu-link nav-link">
                            Home
                        </a>
                    </li>
          
                    <li className="nav-menu-item">
                        <a href="/tickets" className="nav-menu-link nav-link">
                            Tickets
                        </a>
                    </li>
                    

                    <li className="nav-menu-item navMovile">
                        <a href="#roadmap" className="nav-menu-link nav-link">
                            Roadmap
                        </a>
                    </li>

                    <li className="nav-menu-item navMovile">
                        <a href="https://crypto-cup.gitbook.io/crypto-cup/crypto-cup" target="_blank"  rel="noopener noreferrer" className="nav-menu-link nav-link">
                            Whitepaper
                        </a>
                    </li>
                

                    <li>
                    {/* <a href="/Dapp" className="nav-menu-link nav-link navMovile "> */}
                        <div className="wrapperBottonBtn navMovile">
                            <div className="btnButtonNav">
                                <p >Dapp</p>
                                <span className="BorderTopBottomNav "></span>
                                <span className="BorderLeftRightNav "></span>
                            </div>
                            
                        </div>
                       {/* </a> */}

                    </li>
                </ul>


                <canvas className='navBallModel'></canvas>  

                

                <ul className='navDerecha'>
          
                    <li className="nav-menu-item">
                        <a href="#roadmap" className="nav-menu-link nav-link">
                            Roadmap
                        </a>
                    </li>
                    
                    <li className="nav-menu-item ">
                        <a href="https://crypto-cup.gitbook.io/crypto-cup/crypto-cup" target="_blank"  rel="noopener noreferrer" className="nav-menu-link nav-link">
                            Whitepaper
                        </a>
                    </li>
                
                    <li>
                    {/*   <a href="/Dapp" className="nav-menu-link nav-link "> */}
                       {/*  <div className="wrapperBottonBtn">
                            <div className="btnButtonNav">
                                <p className='dapp'>Dapp</p>
                                <span className="BorderTopBottomNav "></span>
                                <span className="BorderLeftRightNav "></span>
                            </div>
                            <p className='comingDapp'>Coming Soon</p>
                        </div> */}
                    {/*       </a> */}

                        <div className="lineDappButton"></div>
                        <p className='dappTitleButton'>DAPP</p>
                        <p className='comingDapp'>Coming Soon</p>
                    </li>
                </ul>

            </nav>
        </header>
    );
}


export default NavHeader;
