import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncional from './navFuncional';
import "./nav.css";
import logo from "./src/logo.png";
import navScroll from './scrollNav';

function NavHeader() {

    useEffect(()=>{
        navScroll()
    },[])

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
                        <a href="#home" className="nav-menu-link nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#example" className="nav-menu-link nav-link">
                            Token
                        </a>
                    </li>
                    
                    <li className="nav-menu-item ">
                        <a href="#home" className="nav-menu-link nav-link">
                            Roadmap
                        </a>
                    </li>
                    <li className="nav-menu-item ">
                        <a href="#home" className="nav-menu-link nav-link">
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


export default NavHeader;
