import React,{useEffect, useState , useContext} from 'react'
import langsFuncional from './langsFuncional'
import "./langs.css"
import { LangContext } from '../../../../context/LangContext'
import flagES from "./src/langES.png"
import flagEN from "./src/langEN.png"

const Langs = () => {

    const contextIdioma = useContext(LangContext)

    useEffect(() => {
        langsFuncional()
    },[])
    const [idioma, setIdioma] = useState("EN")

    const [bandera, setBandera] = useState(flagEN)


  return (
    <div className="boxIdiomas">
        <div className="idiomasContainer" >
            <img className='bandera' src={bandera} alt="bandera lenguaje" />

            <p className='idiomaSelect'>{idioma}</p>
            <div className="radioIdiomas" >
                <div className="boxEnglish boxIdioma" onClick={() => {
                        setIdioma("EN")
                        contextIdioma.establecerLenguaje("enLang")
                        setBandera(flagEN)
                    }}>
                    <p>English  •  EN</p>
                    <div className="imgBoxEN"></div>
                </div>
                <div className="boxEspañol boxIdioma" onClick={() => {
                        setIdioma("ES")
                        contextIdioma.establecerLenguaje("esLang")
                        setBandera(flagES)
                    }} >
                    <p>Español  •  ES</p>
                    <div className="imgBoxES"></div>
                </div>

            </div>
        </div>
       {/*  <div className="lineLangButton"></div> */}
    </div>
    
  )
}

export default Langs