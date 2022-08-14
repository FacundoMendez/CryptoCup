import React, {lazy , Suspense} from 'react'

const Spinner = lazy(() => import ('../../spinner/Spinner'))
const TournamentMain = lazy(() => import ("./presentCryptoCup/Present"))
const TiketsMain = lazy(() => import ('./tikets/TiketsMain'))
const VideoPubli = lazy(() => import ('./videoPubli/VideoPubli'))
const TokenMain = lazy(() => import ('./token/TokenMain'))
const Roadmap = lazy(() => import ('./roadmap/Roadmap'))
const Nfts = lazy(() => import ('./nfts/Nfts'))
const Referidos = lazy(() => import ('./referidos/Referidos'))

const Main = () => {

  return (
    <main>
        <Suspense fallback={<Spinner/>}>
          <TournamentMain/>
          <TiketsMain />
          <Referidos />
          <Nfts /> 
          <VideoPubli />
          <TokenMain />
          <Roadmap/>
        </Suspense>
    </main>
  )
}

export default Main