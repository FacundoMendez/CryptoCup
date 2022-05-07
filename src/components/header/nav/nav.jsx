import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncional from './navFuncional';
import "./nav.css"


function Nav() {


    return (
        <header className="header">
            <nav className="nav">
                <div className='logo'>
                    <p>logo</p>
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
                        <a href="/tikets" className="nav-menu-link nav-link">
                            Tikets
                        </a>
                    </li>
                    
                    <li className="nav-menu-item user">
                        <a href="/roadmap" className="nav-menu-link nav-link">
                            Roadmap
                        </a>
                    </li>
                    <li className="nav-menu-item user">
                        <a href="/whitepaper" className="nav-menu-link nav-link">
                            Whitepaper
                        </a>
                    </li>
                    <li className="nav-menu-item user">
                        <a href="/dapp" className="nav-menu-link nav-link">
                            Dapp
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default Nav;
