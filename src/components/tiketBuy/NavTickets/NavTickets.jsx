import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncional from '../../homePrincipal/header/nav/navFuncional';
import "../../homePrincipal/header/nav/nav.css";
import navBallModel from '../../homePrincipal/header/nav/modelBall';
import {NavLink  } from "react-router-dom";
import commingDapp from '../../homePrincipal/header/nav/comingDapp';


function NavTicket() {

    useEffect(()=>{
        navBallModel()
        commingDapp()
    },[])

    return (
        <header className="header">
            <div className="navBlur"></div>
            <nav className="nav">

                <img className='navBack' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660656832/CryptocupQatar/nav/navBack1_ymcnj5.png"/* {imgNav} */ alt="nav background" />
                <button className="nav-toggle" aria-label="Abrir menú" onClick={navFuncional}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                
                <ul className="navVisible nav-menu navIzquierda">
                    
                    <li className="nav-menu-item " >
                        <NavLink  to="/" className="nav-menu-link nav-link" >
                            Home
                        </NavLink>
                    </li>
          
                    <li className="nav-menu-item">
                        <NavLink to="/tickets" className="nav-menu-link nav-link">
                            Tickets
                        </NavLink>
                    </li>
                    

                    <li className="nav-menu-item navMovile">
                        <NavLink to="/" className="nav-menu-link nav-link">
                            Roadmap
                        </NavLink>
                    </li>

                    <li className="nav-menu-item navMovile">
                        <NavLink to="https://crypto-cup.gitbook.io/crypto-cup/crypto-cup"  target="_blank"  rel="noopener noreferrer" className="nav-menu-link nav-link">
                            Whitepaper
                        </NavLink>
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
                        <NavLink to="/" className="nav-menu-link nav-link">
                            Roadmap
                        </NavLink>
                    </li>
                    
                    <li className="nav-menu-item ">
                        <NavLink to="https://crypto-cup.gitbook.io/crypto-cup/crypto-cup"  target="_blank"  rel="noopener noreferrer" className="nav-menu-link nav-link">
                            Whitepaper
                        </NavLink>
                    </li>
                
                    <li>
                        <div className="lineDappButton"></div>
                        <p className='dappTitleButton'>DAPP</p>
                        <p className='comingDapp'>Coming Soon</p>
                    </li>
                </ul>

            </nav>
        </header>
    );
}


export default NavTicket;
