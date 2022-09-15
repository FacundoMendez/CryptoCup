import React, {useState, createContext} from "react";
import {IntlProvider } from 'react-intl';
import enLang from "../lang/EN/enLang.json"
import esLang from "../lang/ES/esLang.json"
import zhLang from "../lang/ZH/zhLang.json"

const LangContext = createContext();

const LangProvider = ({children}) => {

    let localePorDefecto = "en";
	let mensajesPorDefecto;
	const lang = localStorage.getItem('lang');

    const [mensajes, establecerMensajes] = useState(mensajesPorDefecto);
	const [locale, establecerLocale] = useState(localePorDefecto);


	if(lang){
		localePorDefecto = lang

		if(lang === 'EN'){
			mensajesPorDefecto = enLang;
		} else if(lang === 'ES'){
			mensajesPorDefecto = esLang
		} else if(lang === 'ZH'){
			mensajesPorDefecto = zhLang
		} else {
			localePorDefecto = 'en'
			mensajesPorDefecto = enLang
		}
	}


    const establecerLenguaje = (lenguaje) => {
		switch (lenguaje){
			case 'EN':
				establecerMensajes(enLang);
				establecerLocale('en');
				localStorage.setItem('lang', 'en');
				break;
			case 'esLang':
				establecerMensajes(esLang);
				establecerLocale('es');
				localStorage.setItem('lang', 'es');
				break;
			case 'zhLang':
				establecerMensajes(zhLang);
				establecerLocale('zh');
				localStorage.setItem('lang', 'zh');
				break;
			default:
				establecerMensajes(enLang);
				establecerLocale('en');
				localStorage.setItem('lang', 'en');
		}
	}

    return (
			<LangContext.Provider value={{establecerLenguaje: establecerLenguaje}}>
				<IntlProvider locale={locale} messages={mensajes}>
					{children}
				</IntlProvider>
			</LangContext.Provider>
	)
}

export  {LangProvider , LangContext}