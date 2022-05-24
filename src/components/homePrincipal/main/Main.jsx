import React from 'react'
import TokenMain from './token/TokenMain'
import TournamentMain from './tournament/TournamentMain'
import TiketsMain from './tikets/TiketsMain'
import Roadmap from './roadmap/Roadmap'
import VideoPubli from './videoPubli/VideoPubli'


const Main = () => {

  return (
    <main>
        <TournamentMain/>
        <TiketsMain />
        <VideoPubli />
        <TokenMain />
        <Roadmap/>
    </main>
  )
}

export default Main