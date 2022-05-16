import React,{useEffect} from 'react'
import TokenMain from './token/TokenMain'
import TournamentMain from './tournament/TournamentMain'
import TiketsMain from './tikets/TiketsMain'
import ball from './ball'
import Roadmap from './roadmap/Roadmap'


const Main = () => {

    useEffect(() =>{
        ball()
    },[])

  return (
    <main>
        <TournamentMain/>
        <TiketsMain />
        <TokenMain />
        <Roadmap/>
    </main>
  )
}

export default Main