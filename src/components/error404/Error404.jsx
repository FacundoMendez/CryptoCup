import React, {useEffect} from 'react'
import "./error404.css"

const Error404 = () => {

  useEffect(() => {

    setTimeout(function(){
      window.location.href = "/"
    },8000)
    
   }, [])

  return (
    <div className='containerError404'>
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

        <img className='logoError404' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_500,q_auto:best,w_500/v1660656597/CryptocupQatar/present/Logo_br3xr2.png"/* {logo} */ alt="Logo" />
    </div>
  )
}

export default Error404