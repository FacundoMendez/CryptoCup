import React,{lazy, Suspense} from 'react'
import Spinner from '../spinner/Spinner'

const NavHeader = lazy(() => import ('./header/nav/NavHeader'))
const Main = lazy(() => import ("./main/Main"))
const Home = lazy(() => import ("./header/home/Home"))

const HomePrincipal = () => {
  return (
    <div>
        <Suspense fallback={<Spinner />}>
          <NavHeader />
          <Home/>
          <Main/>
        </Suspense>
    </div>
  )
}

export default HomePrincipal


