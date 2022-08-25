import React,{lazy, Suspense,useContext} from 'react'
import Context from '../context/Context'
import Spinner from '../spinner/Spinner'

const Main = lazy(() => import ("./main/Main"))
const Home = lazy(() => import ("./header/home/Home"))
const Footer = lazy(() => import ("./footer/Footer"))
const TermsAndCondicionsPopup = lazy(() => import ('./header/termsAndCondicionsPopup/TermsAndCondicionsPopup'))

const HomePrincipal = () => {

  const context = useContext(Context)

  return (
        <Suspense fallback={<Spinner />}>
          { !context.checkTerminosyCondiciones ? <TermsAndCondicionsPopup /> : null}
          <Home/>
          <Main/>
          <Footer/>
        </Suspense>
  )
}

export default HomePrincipal


