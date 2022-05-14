import React,{useEffect} from 'react'
import TokenMain from './token/TokenMain'
import TournamentMain from './tournament/TournamentMain'
import TiketsMain from './tikets/TiketsMain'
import ball from './ball'


const Main = () => {

    useEffect(() =>{
        ball()
    },[])

  return (
    <main>

        <TournamentMain/>
        <TiketsMain />
        <TokenMain />
    </main>
  )
}

export default Main