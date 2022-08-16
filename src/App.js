
import React from 'react'
import "./components/homePrincipal/main/main.css"
import { lazy, Suspense} from "react";
import './App.css';
import { useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Context from "./components/context/Context";
import Spinner from "./components/spinner/Spinner";

const Error404 = lazy(() => import ("./components/error404/Error404"))
const TiketBuyPage = lazy(() => import ("./components/tiketBuy/homeTikets/TiketBuyPage"))
const HomePrincipal = lazy(() => import ("./components/homePrincipal/HomePrincipal"))
const PrivacyPolicy = lazy(() => import ("./components/homePrincipal/footer/privacyPolicy/PrivacyPolicy"))

function App() {

  let checkTerminos = localStorage.getItem("terms and Conditions")
  let check;

  if (checkTerminos ==='Accept') {
    sessionStorage.removeItem("terms and Conditions")
    check = true
  } else{
    check = false
  }

  const [checkTerminosyCondiciones,setCheckTerminosYCondiciones]=useState(check)


  return (
    
    <BrowserRouter  >
      <Context.Provider value={{ 
        checkTerminosyCondiciones , 
        setCheckTerminosYCondiciones 
      }} >
    
      <Routes >
          <Route   path="/"                    element={ <Suspense fallback={<Spinner />}>  <HomePrincipal />   </Suspense>}  /> 
          <Route   path='/tickets'             element={ <Suspense fallback={<Spinner />}>  <TiketBuyPage />    </Suspense>}  /> 
          <Route   path='/TermsAndConditions'  element={ <Suspense fallback={<Spinner />}>  <PrivacyPolicy />   </Suspense>}  />
          <Route   path='*'                    element={ <Suspense fallback={<Spinner />}>  <Error404 />        </Suspense>}  />
      </Routes>

    </Context.Provider>

    </BrowserRouter>
  );
}

export default App;

