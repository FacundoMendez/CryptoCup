import React from 'react'
import "./error404.css"
import logo from "../homePrincipal/main/src/Logo.png"

const Error404 = () => {
  return (
    <div className='containerError404'>
        <div className="glitch-wrapper">
            <div className="glitch-text">
                ERROR 404: Not found
            </div>

        </div>

        <a className='enlace404' href="/"><button className='buttonError404' type="button">Homepage</button></a>

        <img className='logoError404' src={logo} alt="Logo" />
    </div>
  )
}

export default Error404