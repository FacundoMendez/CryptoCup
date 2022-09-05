import React, {useEffect} from 'react'
import noMetamaskFuncional from './noMetamaskFuncional'
import {FormattedMessage} from 'react-intl';

const NoMetamask = ({noMetamask , chainIncorrecta , noBalance}) => {

    useEffect(() => {
        noMetamaskFuncional()
    },[])

  return (
    <>
    {
      noMetamask ?     
      <div className="errorNoMetamask">
        <p>
            <FormattedMessage
              id="ticketBuy-popupsErrNoMetamask"
              defaultMessage="Please Install Metamask!"
            />
          
        </p>
      </div>  
      :null
    }

    {
      chainIncorrecta ?     
      <div className="errorNoMetamask">
        <p>
          <FormattedMessage
              id="ticketBuy-popupsChainIncorrecta"
              defaultMessage="Please connect to the Ropsten Network!"
            />
        </p>
      </div>  
      :null
    }

{
      noBalance ?     
      <div className="errorNoMetamask">
        <p>
          <FormattedMessage
              id="ticketBuy-popupsNoBalance"
              defaultMessage="You don't have enough tokens."
            />
        </p>
      </div>  
      :null
    }


    </>

  )
}

export default NoMetamask