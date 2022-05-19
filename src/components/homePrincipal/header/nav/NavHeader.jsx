import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncional from './navFuncional';
import "./nav.css";
import logo from "./src/logoPng.png";
import navScroll from './scrollNav';
import navOcultar from './navOcultar';

function NavHeader() {

    useEffect(()=>{
        navScroll()
        navOcultar()
    },[])

    return (
        <header className="header">
            <div className="navBlur"></div>
            <nav className="nav">
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <button className="nav-toggle" aria-label="Abrir menú" onClick={navFuncional}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                
                <ul className="navVisible nav-menu">
                    <li className="nav-menu-item">
                        <a href="#home" className="nav-menu-link nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#tournament" className="nav-menu-link nav-link">
                            Tournament
                        </a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#tokens" className="nav-menu-link nav-link">
                            Token
                        </a>
                    </li>
                    
                    <li className="nav-menu-item ">
                        <a href="#roadmap" className="nav-menu-link nav-link">
                            Roadmap
                        </a>
                    </li>
                    <li className="nav-menu-item ">
                        <a href="https://crypto-cup.gitbook.io/crypto-cup/crypto-cup" target="_blank"  rel="noopener noreferrer" className="nav-menu-link nav-link">
                            Whitepaper
                        </a>
                    </li>
                    <a href="/Dapp" className="nav-menu-link nav-link ">
                        <div className="wrapperBottonBtn">
                            <div className="btnButtonNav">
                                <p>Dapp</p>
                                <span className="BorderTopBottomNav "></span>
                                <span className="BorderLeftRightNav "></span>
                            </div>
                        </div>
                    </a>
                </ul>
            </nav>
        </header>
    );
}


export default NavHeader;
