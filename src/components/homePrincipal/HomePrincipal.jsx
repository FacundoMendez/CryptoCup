import React,{lazy, Suspense} from 'react'
const Spinner = lazy(() => import ('../spinner/Spinner'))
const NavHeader = lazy(() => import ('./header/nav/NavHeader'))
const Main = lazy(() => import ("./main/Main"))
const Home = lazy(() => import ("./header/home/Home"))
const Footer = lazy(() => import ("./footer/Footer"))

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


