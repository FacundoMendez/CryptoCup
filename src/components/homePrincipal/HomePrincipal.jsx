import React,{lazy, Suspense} from 'react'
import Spinner from '../spinner/Spinner'
import Footer from './footer/Footer'

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
          <Footer/>
        </Suspense>
    </div>
  )
}

export default HomePrincipal


