import React, {lazy , Suspense} from 'react'
import Spinner from '../../spinner/Spinner'
const TournamentMain = lazy(() => import ("./tournament/TournamentMain"))
const TiketsMain = lazy(() => import ('./tikets/TiketsMain'))
const VideoPubli = lazy(() => import ('./videoPubli/VideoPubli'))
const TokenMain = lazy(() => import ('./token/TokenMain'))
const Roadmap = lazy(() => import ('./roadmap/Roadmap'))

const Main = () => {

  return (
    <main>
        <Suspense fallback={<Spinner/>}>
          <TournamentMain/>
          <TiketsMain />
          <VideoPubli />
          <TokenMain />
          <Roadmap/>
        </Suspense>
    </main>
  )
}

export default Main