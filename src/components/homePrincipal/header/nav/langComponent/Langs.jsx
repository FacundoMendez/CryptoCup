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

    const [bandera, setBandera] = useState("https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_100,q_auto:eco,w_100/v1662473734/CryptocupQatar/MultiLang/langEN_yrydko.png")


  return (
    <div className="boxIdiomas">
        <div className="idiomasContainer" >
            <img className='bandera' src={bandera} alt="bandera lenguaje" />

            <p className='idiomaSelect'>{idioma}</p>
            <div className="radioIdiomas" >
                <div className="boxEnglish boxIdioma" onClick={() => {
                        setIdioma("EN")
                        contextIdioma.establecerLenguaje("enLang")
                        setBandera("https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_100,q_auto:eco,w_100/v1662473734/CryptocupQatar/MultiLang/langEN_yrydko.png")
                    }}>
                    <p>English  •  EN</p>
                    <div className="imgBoxEN"></div>
                </div>
                <div className="boxEspañol boxIdioma" onClick={() => {
                        setIdioma("ES")
                        contextIdioma.establecerLenguaje("esLang")
                        setBandera("https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_100,q_auto:eco,w_100/v1662473734/CryptocupQatar/MultiLang/langES_hccmqo.webp")
                    }} >
                    <p>Español  •  ES</p>
                    <div className="imgBoxES"></div>
                </div>

                <div className="boxChino boxIdioma" onClick={() => {
                        setIdioma("ZH")
                        contextIdioma.establecerLenguaje("zhLang")
                        setBandera("https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_99,q_auto:low,w_100/v1663262599/CryptocupQatar/MultiLang/chino_f2tjyh.png")
                    }} >
                    <p>Chino  •  ZH</p>
                    <div className="imgBoxZH"></div>
                </div>

            </div>
        </div>
       {/*  <div className="lineLangButton"></div> */}
    </div>
    
  )
}

export default Langs