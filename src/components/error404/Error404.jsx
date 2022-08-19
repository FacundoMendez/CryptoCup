import React, {useEffect} from 'react'
import "./error404.css"

const Error404 = () => {

  useEffect(() => {

    setTimeout(function(){
      window.location.href = "/"
    },10000)
    
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

        <img className='logoError404' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/v1660659301/CryptocupQatar/error404/Logo_hqnvty.png"/* {logo} */ alt="Logo" />
    </div>
  )
}

export default Error404