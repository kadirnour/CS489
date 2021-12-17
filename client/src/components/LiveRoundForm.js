import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
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
    return  {
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
        };
  });
  const current = new Date();
  const [holeOpen,setHoleOpen] = useState(false);
  const [startTime, setStartTime] = useState(current);
  const [currentTime, setCurrentTime] = useState({hr:0,min:0,sec:0});
  const [elapsedTime, setElapsedTime] = useState({hr:0,min:0,sec:0});
  const [teeTime, setTeeTime] = useState("8:22");
  const [isActive, setIsActive] = useState(true);
  const [par, setPar] = useState(5);
  const [strokes, setStrokes] = useState(par);
  const [holeNumber, setHoleNumber] = useState(1);
  const [start, setStart] = useState(false);


  const [cumulativeTime, setCumulativeTime] = useState([])
  
  const computeSGS = (strokes, min, sec) => {
    return (Number(strokes) + Number(min))
      + ":" + sec;
  }
     
  // const handleDataChange = (event) => {
  //   const name = event.target.name;
  //   if (name === "seconds") {
  //     const newSec = (event.target.value.length < 2 ? "0" +
  //       event.target.value : event.target.value);
  //     const newSGS = computeSGS(state.strokes, state.minutes,
  //       newSec);
  //     setState( prev => ({...prev, seconds: newSec, SGS: newSGS}));
  // } else if (name === "strokes") {
  //     const newStrokes = event.target.value;
  //     const newSGS = computeSGS(newStrokes, state.minutes,
  //       state.seconds);
  //     setState(prev => ({...prev, strokes: newStrokes, SGS: newSGS }));
  //   } else if (name === "minutes") {
  //     const newMin = event.target.value;
  //     const newSGS = computeSGS(state.strokes, newMin,
  //       state.seconds);
  //     setState(prev => ({...prev, minutes: newMin, SGS: newSGS }));
  //   } else {
  //     setState(prev => ({ ...prev, [name]: event.target.value }));
  //   }
  // }
    

//NOTE: useEffect will be in App.js to be able to run the update of the information to the database
//NOTE: see saveRound() function
  const handleSubmit = (event) => {
    event.preventDefault();
    setState(prev => ({...prev, btnIcon: "spinner", btnLabel: "Saving..."}));
    handleSubmitCallback();
  }

  const handleSubmitCallback = async () => {
    const newRound = { ...state};
    // delete newRound.btnIcon;
    // delete newRound.btnLabel;
    await props.saveRound(newRound);
    props.toggleModalOpen();
    props.setMode(RoundsMode.ROUNDSTABLE);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setCurrentTime({hr:current.getHours(), min:current.getMinutes(), sec:current.getSeconds()});
      }, 1000);
    } else if (!isActive && currentTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [currentTime]);

  const openHole = () => {
    if(start)
      setHoleOpen(true);
  }

  const minusStroke = () => {
    if(strokes <=1)
        setStrokes(1);
    else
        setStrokes(strokes -1);
  }
  
  const completeHole = () => {

    setHoleNumber(holeNumber+1);
    setStrokes(par);   
    setCumulativeTime(cumulativeTime.push({hr:elapsedTime.hr, min: elapsedTime.min, sec: elapsedTime.sec}));
    alert("1" + cumulativeTime)
    setState({strokes:state.strokes+strokes});
    alert("2" + state.strokes);
    setStart(current);

    if(holeNumber >=18)
    {
      handleSubmitCallback();
      alert('completed course')
    }
  }

  const copyStartTime = () => {
    
    setStartTime(current);
    setStart(true);
  }

  const computeElapsedTime = () => {
    setElapsedTime({hr:currentTime.hr-startTime.hr,min:currentTime.min-startTime.min,sec:currentTime.sec-startTime.sec })
  }

  useEffect(() => {
    let interval = null;
    let changeHour = 0
    let changeMin = 0 ;
    let changeSec = 0 ;
    //setStartTime(current);
    if (isActive) {
      interval = setInterval(() => {
        changeHour = current.getHours() - startTime.getHours();
        changeMin = current.getMinutes() - startTime.getMinutes();
        changeSec = current.getSeconds() - startTime.getSeconds();

        if (changeHour < 0)
        {
          changeHour = 60 - Math.abs(changeHour);
        }
        if (changeMin < 0)
        {
          changeMin = 60 - Math.abs(changeMin);
          changeHour--;
        }
        if (changeSec < 0)
        {
          changeSec = 60 - Math.abs(changeSec);
          changeMin--;
        }


        setElapsedTime({hr:(changeHour), min:(changeMin), sec:(changeSec)});
      }, 1000);
    } else if (!isActive && currentTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [elapsedTime]);

  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
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
            copyStartTime()
          }}>
            <span>Start Time: {pad(currentTime.hr,2) + ':' + pad(currentTime.min,2) + ':' + pad(currentTime.sec,2)}</span>
            <br></br>
            <span className = "fm-legend-sm">Click again to update</span>
        </button>
        <button type="button"
          className="mode-page-btn-green action-dialog action-button"
          onClick={() => {
            openHole()
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
      Hole {holeNumber}
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
          computeElapsedTime()
          props.setMode(RoundsMode.ROUNDSTABLE);
          props.toggleModalOpen();
        }}>
          <span>{pad(elapsedTime.hr,2) + ':'+ pad(elapsedTime.min,2) + ':' + pad(elapsedTime.sec,2)}</span>
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
          completeHole();
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