import React,{lazy, Suspense,useContext, useEffect} from 'react'
import Context from '../context/Context'
import Spinner from '../spinner/Spinner'
import effectsGsap from './effectsGsap'

const Main = lazy(() => import ("./main/Main"))
const TermsAndCondicionsPopup = lazy(() => import ('./header/termsAndCondicionsPopup/TermsAndCondicionsPopup'))

const HomePrincipal = () => {

  useEffect(()=> {
    effectsGsap()
  },[])

  const context = useContext(Context)

  return (
        <Suspense fallback={<Spinner />}>
          { !context.checkTerminosyCondiciones ? <TermsAndCondicionsPopup /> : null}
          <Main/>
        </Suspense>
  )
}

export default HomePrincipal


