import "./components/homePrincipal/main/main.css"
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import TiketBuyPage from './components/tiketBuy/homeTikets/TiketBuyPage'
import HomePrincipal from './components/homePrincipal/HomePrincipal';
import Dapp from './components/dapp/Dapp';
import PrivacyPolicy from "./components/homePrincipal/footer/privacyPolicy/PrivacyPolicy";

function App() {
  return (

    <BrowserRouter  >

      <Routes >
          <Route path='/' element={<HomePrincipal />}/>
          <Route path='/tickets' element={<TiketBuyPage /> }/>
          <Route path='/Dapp' element={<Dapp /> }/>
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy /> }/>
      </Routes>

    </BrowserRouter>


  );
}

export default App;
