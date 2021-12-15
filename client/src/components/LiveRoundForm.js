import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import RoundsMode  from './RoundsMode.js';

/**
 * RoundForm():
 * Displays the round form for both adding a new round and modifying an existing round.
 * Function allows changes to current information in the web application.
 * @param {props} the properties of the current state the application is in.
 */
function LiveRoundForm(props) {
  const [state, setState] = useState(() => {
    let today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000);
    return props.mode === RoundsMode.LOGROUND
      ? {
          date: today.toISOString().substr(0, 10),
          course: "",
          type: "practice",
          holes: "18",
          strokes: 80,
          minutes: 60,
          seconds: "00",
          SGS: "140:00",
          notes: "",
          btnIcon: "calendar",
          btnLabel: "Log Round",
        } : {
          ...props.roundData,
          btnIcon: "edit",
          btnLabel: "Update Round",
        };
  });
  const [holeOpen,setHoleOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("99:99:99");
  const [teeTime, setTeeTime] = useState("8:22");
  const [par, setPar] = useState(5);
  const [strokes, setStrokes] = useState(5);

  const computeSGS = (strokes, min, sec) => {
    return (Number(strokes) + Number(min))
      + ":" + sec;
  }
     
  const handleDataChange = (event) => {
    const name = event.target.name;
    if (name === "seconds") {
      const newSec = (event.target.value.length < 2 ? "0" +
        event.target.value : event.target.value);
      const newSGS = computeSGS(state.strokes, state.minutes,
        newSec);
      setState( prev => ({...prev, seconds: newSec, SGS: newSGS}));
  } else if (name === "strokes") {
      const newStrokes = event.target.value;
      const newSGS = computeSGS(newStrokes, state.minutes,
        state.seconds);
      setState(prev => ({...prev, strokes: newStrokes, SGS: newSGS }));
    } else if (name === "minutes") {
      const newMin = event.target.value;
      const newSGS = computeSGS(state.strokes, newMin,
        state.seconds);
      setState(prev => ({...prev, minutes: newMin, SGS: newSGS }));
    } else {
      setState(prev => ({ ...prev, [name]: event.target.value }));
    }
  }
    

//NOTE: useEffect will be in App.js to be able to run the update of the information to the database
//NOTE: see saveRound() function
  const handleSubmit = (event) => {
    event.preventDefault();
    setState(prev => ({...prev, btnIcon: "spinner", btnLabel: "Saving..."}));
    handleSubmitCallback();
  }

  const handleSubmitCallback = async () => {
    const newRound = { ...state};
    delete newRound.btnIcon;
    delete newRound.btnLabel;
    await props.saveRound(newRound);
    props.toggleModalOpen();
    props.setMode(RoundsMode.ROUNDSTABLE);
  }
  const minusStroke = () => {
    if(strokes <=1)
        setStrokes(1);
    else
        setStrokes(strokes -1);
  }
    
  return (
    <>
    {!holeOpen?
    <div id="roundsModeDialog"
      className="mode-page action-dialog" role="dialog"
      aria-modal="true" aria-labelledby="roundFormHeader" tabIndex="0">
      <h1 id="roundFormHeader" className="mode-page-header">
        Live Round
      </h1>
      <div className="mb-3 centered">
          <span> 
            18 Open Division<br></br>
            Tee time: {teeTime}<br></br>
            Playing holes 1 through 18<br></br>
          </span>
      </div>
      <div className="round-page-btn-container-live">
        <button type="button"
          className="mode-page-btn action-dialog action-button"
          onClick={() => {
            console.log('log manually');
            props.setMode(RoundsMode.ROUNDSTABLE);
            props.toggleModalOpen();
          }}>
            <span>Start Time: {currentTime}</span>
            <br></br>
            <span className = "fm-legend-sm">Click again to update</span>
        </button>
        <button type="button"
          className="mode-page-btn-green action-dialog action-button"
          onClick={() => {
            console.log('log manually');
            setHoleOpen(true)
          }}>
            <span>Go to Scoring</span>
            <FontAwesomeIcon icon = "angle-right"></FontAwesomeIcon>
        </button>
      </div> 
    </div>:
    <div id="roundsModeDialog"
    className="mode-page action-dialog" role="dialog"
    aria-modal="true" aria-labelledby="roundFormHeader" tabIndex="0">
    <h1 id="roundFormHeader" className="mode-page-header">
      Hole N
    </h1>
    <h2 className="mb-3 centered">
        <span> 
          Record Hole-Out Time:
        </span>
    </h2>
    <div className="round-page-btn-container-live">
      <button type="button"
        className="mode-page-btn action-dialog action-button"
        onClick={() => {
          props.setMode(RoundsMode.ROUNDSTABLE);
          props.toggleModalOpen();
        }}>
          <span>{currentTime}</span>
          <br></br>
          <span className = "fm-legend-sm">Click When in Hole</span>
      </button>
      <h1 id="roundFormHeader" className="mb-3 centered">
        Record Strokes
      </h1>
      <button type="button"
        className="mode-page-btn-gray action-dialog action-button"
        onClick={() => {
          console.log('log manually');
          setStrokes(strokes+1);
        }}>
          <span>+</span>
      </button>
        
      {strokes == par?
      <h1 id="roundFormHeader" className="mode-page-header">
        {par + "(par)"}
      </h1> :
      <h1 id="roundFormHeader" className="mode-page-header">
        {strokes}
      </h1>}
      <button type="button"
        className="mode-page-btn-gray action-dialog action-button"
        onClick={() => {  
          minusStroke();
        }}>
          <span>-</span>
      </button>
      <button type="button"
        className="mode-page-btn-green action-dialog action-button"
        onClick={() => {
          setHoleOpen(false);
        }}>
          <span>Save &amp; Next Hole</span>
          <FontAwesomeIcon icon = "angle-right"></FontAwesomeIcon>
      </button>
    </div> 
  </div>}
    </>
  );
 }


  
export default LiveRoundForm;