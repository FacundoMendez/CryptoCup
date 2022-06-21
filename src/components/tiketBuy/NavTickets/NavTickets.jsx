import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncional from '../../homePrincipal/header/nav/navFuncional';
import "../../homePrincipal/header/nav/nav.css";
import navBallModel from '../../homePrincipal/header/nav/modelBall';
import imgNav from "../../homePrincipal/header/nav/src/navBack.png"


function NavTicket() {

    useEffect(()=>{
        navBallModel()
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
                    
                    <li className="nav-menu-item " >
                        <a href="/" className="nav-menu-link nav-link">
                            Home
                        </a>
                    </li>
          
                    <li className="nav-menu-item">
                        <a href="/tickets" className="nav-menu-link nav-link">
                            Tickets
                        </a>
                    </li>
                    

                    <li className="nav-menu-item navMovile">
                        <a href="/" className="nav-menu-link nav-link">
                            Roadmap
                        </a>
                    </li>

                    <li className="nav-menu-item navMovile">
                        <a href="https://crypto-cup.gitbook.io/crypto-cup/crypto-cup" target="_blank"  rel="noopener noreferrer" className="nav-menu-link nav-link">
                            Whitepaper
                        </a>
                    </li>
                


                {/*     <a href="/Dapp" className="nav-menu-link nav-link navMovile "> */}
                        <div className="wrapperBottonBtn">
                            <div className="btnButtonNav">
                                <p>Dapp</p>
                                <span className="BorderTopBottomNav "></span>
                                <span className="BorderLeftRightNav "></span>
                            </div>
                        </div>
                   {/*  </a> */}
                </ul>


                <canvas className='navBallModel'></canvas>  

                

                <ul className='navDerecha'>
          
                    <li className="nav-menu-item">
                        <a href="/" className="nav-menu-link nav-link">
                            Roadmap
                        </a>
                    </li>
                    
                    <li className="nav-menu-item ">
                        <a href="https://crypto-cup.gitbook.io/crypto-cup/crypto-cup" target="_blank"  rel="noopener noreferrer" className="nav-menu-link nav-link">
                            Whitepaper
                        </a>
                    </li>
                

                  {/*   <a href="/Dapp" className="nav-menu-link nav-link "> */}
                        <div className="wrapperBottonBtn">
                            <div className="btnButtonNav">
                                <p>Dapp</p>
                                <span className="BorderTopBottomNav "></span>
                                <span className="BorderLeftRightNav "></span>
                            </div>
                        </div>
                {/*     </a> */}
                </ul>

            </nav>
        </header>
    );
}


export default NavTicket;
