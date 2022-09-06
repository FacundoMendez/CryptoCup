import React,{useEffect, useState , useContext} from 'react'
import langsFuncional from './langsFuncional'
import "./langs.css"
import { LangContext } from '../../../../context/LangContext'


const Langs = () => {

    const contextIdioma = useContext(LangContext)

    useEffect(() => {
        langsFuncional()
    },[])
    const [idioma, setIdioma] = useState("EN")

    const [bandera, setBandera] = useState("https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:low/v1662473734/CryptocupQatar/MultiLang/langEN_yrydko.webp")


  return (
    <div className="boxIdiomas">
        <div className="idiomasContainer" >
            <img className='bandera' src={bandera} alt="bandera lenguaje" />

            <p className='idiomaSelect'>{idioma}</p>
            <div className="radioIdiomas" >
                <div className="boxEnglish boxIdioma" onClick={() => {
                        setIdioma("EN")
                        contextIdioma.establecerLenguaje("enLang")
                        setBandera("https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:low/v1662473734/CryptocupQatar/MultiLang/langEN_yrydko.webp")
                    }}>
                    <p>English  •  EN</p>
                    <div className="imgBoxEN"></div>
                </div>
                <div className="boxEspañol boxIdioma" onClick={() => {
                        setIdioma("ES")
                        contextIdioma.establecerLenguaje("esLang")
                        setBandera("https://res.cloudinary.com/dvrxw8fbg/image/upload/q_auto:low/v1662473734/CryptocupQatar/MultiLang/langES_hccmqo.webp")
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