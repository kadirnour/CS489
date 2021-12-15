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
    <div id="roundsModeDialog"
      className="mode-page action-dialog" role="dialog"
      aria-modal="true" aria-labelledby="roundFormHeader" tabIndex="0">
      <h1 id="roundFormHeader" className="mode-page-header">
        {props.mode === RoundsMode.LOGROUND ? "Log Round" : "Edit Round"}
      </h1>
      <div className="round-form-btn-container">
        <button type="button"
          className="mode-page-btn action-dialog action-button"
          onClick={() => {
            console.log('live round');
            setLiveRound(true);
          }}>
            <FontAwesomeIcon icon="clock" />
            <span>&nbsp;Track Live (GUI)</span>
        </button>
        <button type="button"
          className="mode-page-btn action-dialog action-button"
          onClick={() => {
            console.log('log manually');
            setPrevRound(true);
          }}>
            <FontAwesomeIcon icon="clipboard-check" />
            <span>Log Previously Played</span>
        </button>
      </div> 
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