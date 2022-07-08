import "./components/homePrincipal/main/main.css"
import { lazy, Suspense} from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";


const Error404 = lazy(() => import ("./components/error404/Error404"))
const TiketBuyPage = lazy(() => import ("./components/tiketBuy/homeTikets/TiketBuyPage"))
const HomePrincipal = lazy(() => import ("./components/homePrincipal/HomePrincipal"))
const Dapp = lazy(() => import ("./components/dapp/Dapp"))
const PrivacyPolicy = lazy(() => import ("./components/homePrincipal/footer/privacyPolicy/PrivacyPolicy"))
const Spinner = lazy(() => import ("./components/spinner/Spinner"))

function App() {



  return (
    <BrowserRouter  >


      <Routes >
          <Route   path="/"               element={ <Suspense fallback={<Spinner />}>  <HomePrincipal />   </Suspense>}  /> 
          <Route   path='/tickets'        element={ <Suspense fallback={<Spinner />}>  <TiketBuyPage />    </Suspense>}  /> 
          <Route   path='/Dapp'           element={ <Suspense fallback={<Spinner />}>  <Dapp />            </Suspense>}  /> 
          <Route   path='/TermsAndConditions'  element={ <Suspense fallback={<Spinner />}>  <PrivacyPolicy />   </Suspense>}  />
          <Route   path='*'               element={ <Suspense fallback={<Spinner />}>  <Error404 />        </Suspense>}  />
      </Routes>


    </BrowserRouter>

  );
}

export default App;

