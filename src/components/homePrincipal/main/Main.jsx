import React, {lazy , Suspense} from 'react'

const PelotaGame = lazy(() => import ('./pelotaGame/PelotaGame'))
const Home = lazy(() => import ("../header/home/Home"))
const Spinner = lazy(() => import ('../../spinner/Spinner'))
const TournamentMain = lazy(() => import ("./presentCryptoCup/Present"))
const TiketsMain = lazy(() => import ('./tikets/TiketsMain'))
const VideoPubli = lazy(() => import ('./videoPubli/VideoPubli'))
const TokenMain = lazy(() => import ('./token/TokenMain'))
const Roadmap = lazy(() => import ('./roadmap/Roadmap'))
const Nfts = lazy(() => import ('./nfts/Nfts'))
const Referidos = lazy(() => import ('./referidos/Referidos'))
const Footer = lazy(() => import ("../footer/Footer"))


const Main = () => {

  return (
    <main className='main'>
        <Suspense fallback={<Spinner/>}>
          <Home/>
          <TournamentMain/>
          <TiketsMain />
          <Nfts /> 
          <PelotaGame />
          <Referidos />
          <VideoPubli />
          <TokenMain />
          <Roadmap/>
          <Footer/>
        </Suspense>
    </main>
  )
}

export default Main