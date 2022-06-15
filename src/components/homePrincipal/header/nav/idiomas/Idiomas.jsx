import React,{useState, useEffect} from 'react'
import "./idiomas.css"
import idiomasFuncional from './idiomasFuncional'
import enLanguage from './controladores/en'
import esLanguage from './controladores/es'


const Idiomas = () => {

    const [idioma, setIdioma] = useState("EN")

    useEffect(() => {
        idiomasFuncional()
    },[])

  return (
    <div className="idiomasContainer" >
        <p className='idiomaSelect'>{idioma}</p>
        <div className="radioIdiomas" >
            <div className="boxEnglish boxIdioma"  onClick={() => {
                enLanguage()    
                setIdioma("EN")
            }}>
            <p>English  •  EN</p>
            </div>
            <div className="boxEspañol boxIdioma" onClick={() =>{
                esLanguage()
                setIdioma("ES")
            }} >

            <p>Español  •  ES</p>
            </div>
         

    {/*         <input 
                type="radio" 
                value="Other"
                name="gender" 
            /> Other */}
        </div>
    </div>
  )
}

export default Idiomas