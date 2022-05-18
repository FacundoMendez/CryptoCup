import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncional from '../homePrincipal/header/nav/navFuncional';
import "./navTikets.css";
import logo from "./src/logoPng.png";

function NavTikets() {


    return (
        <header className="header">
            <nav className="nav">
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <button className="nav-toggle" aria-label="Abrir menú" onClick={navFuncional}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                
                <ul className="navVisible nav-menu">
                    <li className="nav-menu-item">
                        <a href="/" className="nav-menu-link nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="/" className="nav-menu-link nav-link">
                            Token
                        </a>
                    </li>
                    
                    <li className="nav-menu-item ">
                        <a href="/" className="nav-menu-link nav-link">
                            Roadmap
                        </a>
                    </li>
                    <li className="nav-menu-item ">
                        <a href="https://crypto-cup.gitbook.io/crypto-cup/crypto-cup" target="_blank"  rel="noopener noreferrer" className="nav-menu-link nav-link">
                            Whitepaper
                        </a>
                    </li>
                    <li className=" dapp">
                        <a href="/dapp" className="nav-menu-link nav-link ">
                            Dapp
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default NavTikets;
