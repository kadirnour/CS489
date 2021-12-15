import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import RoundsMode  from './RoundsMode.js';
import PreviousRoundForm from './PreviousRoundForm.js';
import LiveRoundForm from './LiveRoundForm.js';

/**
 * RoundForm():
 * Displays the round form for both adding a new round and modifying an existing round.
 * Function allows changes to current information in the web application.
 * @param {props} the properties of the current state the application is in.
 */
function RoundForm(props) {
  const [liveRound, setLiveRound] = useState(false);
  const [prevRound, setPrevRound] = useState(false);
    
  return (
    <>
    { (!liveRound && !prevRound) ?
      <div className="mode-page-btn-container">
      <button type="button"
        className="big-btn"
        onClick={() => {
          console.log('live round');
          setLiveRound(true);
        }}>
          <span>live round</span>
        </button>
        <button type="button"
        className="big-btn"
        onClick={() => {
          console.log('log manually');
          setPrevRound(true);
        }}>
          <span>log round manually</span>
        </button>
    </div>:

    <div>
      {liveRound &&   <div>
                        <LiveRoundForm mode={props.mode}
                        roundData={null}
                        saveRound={props.saveRound}
                        setMode={props.setMode}
                        toggleModalOpen={props.toggleModalOpen} />
                      </div>}
      { prevRound &&  <div>
                        <PreviousRoundForm mode={props.mode}
                        roundData={null}
                        saveRound={props.saveRound}
                        setMode={props.setMode}
                        toggleModalOpen={props.toggleModalOpen} />
                      </div>}
    </div>}
    </>
  );
 }


  
export default RoundForm;