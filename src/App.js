import "./components/homePrincipal/main/main.css"
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import TiketBuyPage from './components/tiketBuy/homeTikets/TiketBuyPage'
import HomePrincipal from './components/homePrincipal/HomePrincipal';
import Dapp from './components/dapp/Dapp';

function App() {
  return (

    <BrowserRouter  >

      <Routes >
          <Route path='/' element={<HomePrincipal />}/>
          <Route path='/tickets' element={<TiketBuyPage /> }/>
          <Route path='/Dapp' element={<Dapp /> }/>
      </Routes>

    </BrowserRouter>


  );
}

export default App;
