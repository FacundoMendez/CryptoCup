import React,{useEffect} from 'react'
import TokenMain from './token/TokenMain'
import TournamentMain from './tournament/TournamentMain'
import TiketsMain from './tikets/TiketsMain'
import ball from './ball'
import Roadmap from './roadmap/Roadmap'
import VideoPubli from './videoPubli/VideoPubli'


const Main = () => {

    useEffect(() =>{
        ball()
    },[])

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