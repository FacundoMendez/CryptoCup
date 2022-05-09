import React, {useEffect} from 'react'
import "./home.css"
import cup from './cup'


const Home = () => {

  useEffect(()=>{
    cup()
  },[])


  return (
    <div id='home' className="containerHome">
      <div className="containerPrincipalHome">
        
        <div className='textPrincipalHome'>
          <div className="tite-home">
              <p>Title Lorem ipsum dolor sit amet <br />
                      lorem asdoi todoto lso
              </p>
              <div className="buttons_title">
                <button className='Whitelist-buttonTitle'>Whitelist</button>
                <button className='Tikets-buttonTitle'>Tikets</button>
          </div>
          </div>
        
        </div>

        <canvas className='cupWebGl'></canvas>  
      </div>    
    </div>

  )
}

export default Home