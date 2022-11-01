import React, {useState, useEffect} from 'react'
import "./tiket.css"
import { Navigate } from 'react-router-dom'
import tiketsScroll from './tiketsScroll'
import {FormattedMessage} from 'react-intl';
import Button from '../../buttons/Button';


const TiketsMain = () => {

  const [tiketClick , setTiketClick] = useState(false)


  useEffect(()=>{
    tiketsScroll()
  },[])

  return (
    <>
    <div id='tickets' className="containerTikets">
      <div className="diviTicket"></div>
        
      <img className="backgroundReflejo backTikets " src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_2000,q_80,w_1400/v1663006484/CryptocupQatar/tickets/backTickets_csjolw.png" alt="background tickets" />

        <div className="textTikets">
            <div className=" tiketsTitle">
              <h2>
                <FormattedMessage
                  id="tickets-title"
                  defaultMessage="GRIND YOUR WAY TO THE TOP OF THE LADDER"
                />
              </h2>
            </div>
            <p className='textDescripcionTikets'>
              <FormattedMessage
                id="tickets-text"
                defaultMessage="To be available to participae, you’ll have two choices, the Basic Ladder and the Boost Ladder. The first one 'Basic Ladder' will allows you to play in a Free way. The second one 'Boost Ladder' will allows you to play a more inmersive tournament, accesing exclusively with the NFT Boost Ladder Ticket!"
              />
            </p>
        </div>
        <div className="boxTickets-Home-basic">
          <div className="boxTicketBasic_button">
            <div className="tiketImg-basic" >
              <img className='tiketsPreview' src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_806,q_auto:best,w_354/v1660656671/CryptocupQatar/tickets/tiketBasic_ymmkrm.png" alt="ticket" onClick={() => setTiketClick(true)} />
            </div>

          </div>

          <div className="titleTicket-home-basic">
            <h2>
              <FormattedMessage
                id="tickets-basicLadderTitle"
                defaultMessage="BASIC LADDER"
              />
            </h2>
            <div className="textoTicket-home">
              <p>

                <FormattedMessage
                  id="tickets-basicLadderText"
                  defaultMessage="This Ladder is designed for everyone who wants to compete in a free way. You only need to log in with you Google Account and be ready to forecast the largest posible number of matches to earn points on this Ladder! "
                />
                <br /><br />
                <FormattedMessage
                  id="tickets-basicLadderText2"
                  defaultMessage="Each match will vary in the given points to the participants, based on the real probabilities on winning/losing of each different team and its adversary."
                />
                
              </p>
            </div>
          </div>
       
        </div>

        <div className="boxTickets-Home-boost">
           
            <div className="titleTicket-home-boost">
              <h2>
                <FormattedMessage
                  id="tickets-boostLadderTitle"
                  defaultMessage="BOOST LADDER"
                />
              </h2>
              <div className="textoTicket-home">
                <p className='text_boost_top'>
                  <FormattedMessage
                    id="tickets-boostLadderText1"
                    defaultMessage="It’s a Premium Ladder that grants you Access to special extra functions which will bring more value to your strategy, timing, visión and overall a more interesting competition. Joining this Ladder will unlock you: "
                  />
                </p>
                <ul className='stars'>
                  <li className='star1'><img  src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_99,q_auto:eco,w_100/v1661557746/CryptocupQatar/tickets/star3d_prqb1b.png" alt="stars1" /> 
                    <FormattedMessage
                      id="tickets-boostLadderStar1"
                      defaultMessage="Token utility"
                    />
                  </li>
                  <li className='star2'><img  src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_99,q_auto:eco,w_100/v1661557746/CryptocupQatar/tickets/star3d_prqb1b.png" alt="stars2" />  
                    <FormattedMessage
                      id="tickets-boostLadderStar2"
                      defaultMessage="Access to Multipliers"
                    />
                  </li>

                  <li className='star4'><img  src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_99,q_auto:eco,w_100/v1661557746/CryptocupQatar/tickets/star3d_prqb1b.png" alt="stars4" />  
                      <FormattedMessage
                        id="tickets-boostLadderStar4"
                        defaultMessage="Prediction Streak Rewards"
                      />
                  </li>
                </ul>
                <p className='text_boost_bottom'>
                  <FormattedMessage
                      id="tickets-boostLaddertext2"
                      defaultMessage="Test your skills on all matches of the world cup by accessing multipliers to climb faster. Access winning streaks and more!"
                    />
                </p>

              </div>
        
          </div>
          <div className="boxTicketBoost_button">
              <div className="tiketImg-boost" >
                    <img className='tiketsPreview' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_806,q_auto:best,w_354/v1660656671/CryptocupQatar/tickets/tiketBoost_rbpfe9.png" alt="ticket" onClick={() => setTiketClick(true)} />
              </div>
          
              <a className='buttonBuyTicketLP_boost' href="/tickets">
                  <Button title="Buy Ticket"/>
              </a>
          </div>
        </div>
        <div className="division">
            <img className='divisionImg' src= "https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_450,q_auto:best,w_2467/v1660656670/CryptocupQatar/tickets/division_ry26ic.png" alt="Division container" />
        </div>
       {tiketClick ? <Navigate to= "/tickets" /> : null } 

      </div>
    </>
  )
}

export default TiketsMain