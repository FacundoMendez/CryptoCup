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
        
        <canvas className='cupWebGl'></canvas>  
      </div>    

      

      <div className='homePrue2'></div>


    </div>

  )
}

export default Home