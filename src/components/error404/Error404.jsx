import React, {useEffect} from 'react'
import "./error404.css"
/* import logo from "./src/Logo.png" */
/* import particulas from "../tiketBuy/homeTikets/src/particle1P.mp4" */

const Error404 = () => {

  useEffect(() => {

    setTimeout(function(){
      window.location.href = "/"
    },10000)
    
   }, [])

  return (
    <div className='containerError404'>
      <video className='particulas404' src= "https://res.cloudinary.com/dvrxw8fbg/video/upload/v1660657005/CryptocupQatar/Home%20/particle1P_bhqtfr.mp4"/* {particulas}  */autoPlay loop muted ></video>
        <div className="imgeerror"></div>
        <div className="glitch-wrapper">
            <div className="glitch-text">
                <h2> ERROR 404 <br /> <span>NOT FOUND</span>  </h2> 
            </div>
        </div>

        <a className='enlace404' href="/">
          <div className="wrapperBotton-error404">
            <div className="btn-error404">
              <p>HOMEPAGE</p>
              <span className="BorderTopBottom-error404 "></span>
              <span className="BorderLeftRight-error404 "></span>
            </div>
          </div>
        </a>

        <img className='logoError404' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660659301/CryptocupQatar/error404/Logo_hqnvty.png"/* {logo} */ alt="Logo" />
    </div>
  )
}

export default Error404