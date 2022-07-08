import React,{lazy, Suspense,useContext} from 'react'
import Context from '../context/Context'

const Spinner = lazy(() => import ('../spinner/Spinner'))
const NavHeader = lazy(() => import ('./header/nav/NavHeader'))
const Main = lazy(() => import ("./main/Main"))
const Home = lazy(() => import ("./header/home/Home"))
const Footer = lazy(() => import ("./footer/Footer"))
const TermsAndCondicionsPopup = lazy(() => import ('./header/termsAndCondicionsPopup/TermsAndCondicionsPopup'))

const HomePrincipal = () => {

  const context = useContext(Context)

  console.log(context.checkTerminosyCondiciones)
  

 /*  console.log(checkStatePopupTyc) */
  return (
    <div>
        <Suspense fallback={<Spinner />}>
          { !context.checkTerminosyCondiciones ? <TermsAndCondicionsPopup /> : null}
          <NavHeader />
          <Home/>
          <Main/>
          <Footer/>
        </Suspense>
    </div>
  )
}

export default HomePrincipal


