import React,{useEffect, useState , useContext} from 'react'
import langsFuncional from './langsFuncional'
import "./langs.css"
import { LangContext } from '../../../../context/LangContext'


const Langs = () => {

    const contextIdioma = useContext(LangContext)

    useEffect(() => {
        langsFuncional()
    },[])
    const [idioma, setIdioma] = useState("ENG")

    const [bandera, setBandera] = useState("https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_100,q_auto:eco,w_100/v1662473734/CryptocupQatar/MultiLang/langEN_yrydko.png")


  return (
    <div className="boxIdiomas">
        <div className="idiomasContainer" >
            <img className='bandera' src={bandera} alt="bandera lenguaje" />

            <p className='idiomaSelect'>{idioma}</p>
            <div className="radioIdiomas" >
                <div className="boxEnglish boxIdioma" onClick={() => {
                        setIdioma("ENG")
                        contextIdioma.establecerLenguaje("enLang")
                        setBandera("https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_100,q_auto:eco,w_100/v1662473734/CryptocupQatar/MultiLang/langEN_yrydko.png")
                    }}>
                    <p>English  •  ENG</p>
                    <div className="imgBoxEN"></div>
                </div>
                <div className="boxEspañol boxIdioma" onClick={() => {
                        setIdioma("ESP")
                        contextIdioma.establecerLenguaje("esLang")
                        setBandera("https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_100,q_auto:eco,w_100/v1662473734/CryptocupQatar/MultiLang/langES_hccmqo.webp")
                    }} >
                    <p>Español  •  ESP</p>
                    <div className="imgBoxES"></div>
                </div>

                <div className="boxChino boxIdioma" onClick={() => {
                        setIdioma("ZHO")
                        contextIdioma.establecerLenguaje("zhLang")
                        setBandera("https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_99,q_auto:low,w_100/v1663262599/CryptocupQatar/MultiLang/chino_f2tjyh.png")
                    }} >
                    <p>Chino  •  ZHO</p>
                    <div className="imgBoxZH"></div>
                </div>

                <div className="boxArabe boxIdioma" onClick={() => {
                        setIdioma("QTR")
                        contextIdioma.establecerLenguaje("arLang")
                        setBandera("https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_100,q_auto:eco,w_100/v1663278182/CryptocupQatar/MultiLang/qatar_gvetll.png")
                    }} >
                    <p>Qatar  •  QTR</p>
                    <div className="imgBoxAr"></div>
                </div>
            </div>
        </div>
       {/*  <div className="lineLangButton"></div> */}
    </div>
    
  )
}

export default Langs