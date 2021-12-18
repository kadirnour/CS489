import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { now } from 'mongoose';
import React, { useState, useEffect } from 'react';
import RoundsMode  from './RoundsMode.js';

/**
 * RoundForm():
 * Displays the round form for both adding a new round and modifying an existing round.
 * Function allows changes to current information in the web application.
 * @param {props} the properties of the current state the application is in.
 */ 
export default function LiveRoundForm(props){

  const [roundData,setRoundData] = useState({});
  const [clock, setClock] = useState();
  const [timer, setTimer] = useState("00:00:00");
  const [intervalId, setIntervalId] = useState(0);
  const [control, setControl] = useState(false);
  const [startTime, setStartTime] = useState(0);

  const [scoreMode, setScoreMode] = useState(false);

  const [holeOutTime, setHoleOutTime] = useState([]);
  const [strokes, setStrokes] = useState(0);
  const [count, setCount] = useState(5);
  const [holeNum, setHoleNum] = useState(1);
  const [enable, setEnable] = useState(false);

  const initialIzeRoundData = () => {
    let today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000);
    setRoundData(
      {
        date: today.toISOString().slice(0, 10),
        course: "Default",
        type: "practice",
        holes: "18",
        strokes: 0,
        minutes: 0,
        seconds: "00",
        SGS: "140:00",
        notes: ""
      }
    );
  }

  const handleSubmit = async() => {

    const courseName = prompt("Enter Course Name");
    let rd = {...roundData};
    rd["course"] = courseName;
    setRoundData(rd);

    //send to database
    props.saveRound(rd);

    //reset UI
    setScoreMode(false);
    setHoleOutTime([]);
    setCount(5);
    setHoleNum(1);
    setEnable(false);

    props.setMode(RoundsMode.ROUNDSTABLE);
  };

  const incrementTimer = () => {
    let hour = Number(timer.substring(0,2)), min = Number(timer.substring(3,5)), 
        sec = Number(timer.substring(6,8));

      sec += 1;
      if(sec == 60){
        sec = 0;
        min += 1;
      }
      if(min == 60){
        min = 0;
        hour += 1;
      }
      
      sec = String(sec).padStart(2,'0');
      min = String(min).padStart(2,'0');
      hour = String(hour).padStart(2,'0');
      
      setTimer(hour + ":" + min + ":" + sec);
  };

//component did mount to initialize data, clock and timer 
  useEffect(() => {
    initialIzeRoundData();
    setClock(new Date());

  }, []);

//component did update to advance clock
  useEffect(() => {
    setClock(new Date());
  });

  //timer
  useEffect(() => {
    console.log("in useEffect");
    let interval = 0;

    if(control){
      console.log("startTime changed");
      interval = setInterval(incrementTimer, 1000);
      setIntervalId(interval);
    }
    return () => {
      clearInterval(interval);
    }
  }, [control, timer]);

  return (
    <>
    {
      !scoreMode ?
    <div className="mode-page action-dialog" role="dialog"
      aria-modal="true" aria-labelledby="roundFormHeader" tabIndex="0">
      <h1 className="mode-page-header">
        Live Round
      </h1>
      <div className="mb-3 centered">
          <span> 
            18 Open Division<br></br>
            Tee time: 8:22 <br></br>
            Playing holes 1 through 18<br></br>
          </span>
      </div>
      <div className="round-page-btn-container-live">
        <button type="button"
          className="w-100 mode-page-btn action-dialog action-button"
          onClick={() => {        
            setStartTime(clock.toString().substring(16,24));
          }}>
            { !startTime ? 
            <>
              <h1>Start Round Timer</h1>
              <span className = "fm-legend-sm">(No time recorded yet)</span>
            </>
              :
            <>
              <h1>Start Time: {startTime}</h1>
              <span className = "fm-legend-sm">Click again to update</span>
            </>
            }
        </button>
        <button type="button"
          className="w-100 mode-page-btn-green action-dialog action-button"
          onClick={() => {
            if(startTime){
              setScoreMode(prev => !scoreMode);
              setControl(true); //start the timer
            }
          }}>
            <span>Go to Scoring</span>
            <FontAwesomeIcon icon = "angle-right"></FontAwesomeIcon>
        </button>
      </div> 
    </div> 
    : 
    <div id="score-container"
      className="mode-page action-dialog" role="dialog"
      aria-modal="true" aria-labelledby="roundFormHeader" tabIndex="0">
      <h1 id="roundFormHeader" className="mode-page-header">
        Hole {holeNum > 18 ? 18 : holeNum}
      </h1>
      <h2 className="mb-3 centered">
        <span> 
          Record Hole-Out Time:
        </span>
      </h2>
      <div className="round-page-btn-container-live">
      <button type="button"
        className=" w-100 mode-page-btn action-dialog action-button"
        style={enable ? {"background": "#5d8de0"} : {"background": "#13294E"}}
        onClick={() => {
          setControl(false); //stop the timer
          clearInterval(intervalId);

          let outTime = timer;
          let hnum = String(holeNum);
          setHoleOutTime([...holeOutTime, {[hnum]: {"hole-out-time": outTime, "strokes": -1}}])
          setEnable(true);
        }}>
          <h1>{timer}</h1>
          <span className = "fm-legend-sm">Click When in Hole</span>
      </button>
      <h1 className="mb-3 centered">
        Record Strokes
      </h1>
      <button type="button"
        className={`btn w-100 mode-page-btn action-dialog action-button`}
        disabled={!enable}
        onClick={() => {
          setCount(count + 1);
        }}>
          <h1>+</h1>
      </button>
        
      {
      count == 5 ?
      <h1 className="mode-page-header">
        5 (par)
      </h1> 
      :
      <h1 className="mode-page-header">
        {count}
      </h1>}
      <button type="button"
        className={`btn w-100 mode-page-btn action-dialog action-button`}
        disabled={!enable}
        onClick={() => {  
          setCount(Math.max(0, count - 1));
        }}>
          <span>-</span>
      </button>
      {
        holeNum <= 18 ? 
        <button type="button"
          className={`btn w-100 mode-page-btn-green action-dialog action-button`}
          disabled={!enable}
          onClick={() => {
            let newRoundData = {...roundData};
            let hot = [...holeOutTime];

            newRoundData["strokes"] += count;
            newRoundData["minutes"] = Number(timer.substring(3,5));
            newRoundData["seconds"] = timer.substring(6,8);
            
            hot[hot.length - 1][holeNum].strokes = count; // saves number of strokes in current round

            setHoleNum(holeNum + 1);
            setStrokes(strokes + count);
            setEnable(false);
            setRoundData(newRoundData);
            setHoleOutTime(hot);

            setTimer("00:00:00")// restart timer
            setControl(true);
        }}>
          <span>Save &amp; Next Hole</span>
          <FontAwesomeIcon icon = "angle-right"></FontAwesomeIcon>
        </button>
    :
    
        <button type="button"
          className="w-100 mode-page-btn-green action-dialog action-button"
          onClick={() => {
            handleSubmit();
          }}>
            <span>Submit Round</span>
            <FontAwesomeIcon icon = "angle-right"></FontAwesomeIcon>
        </button>
      }
    </div>

  </div>
  }
    {/* // :
    // <div id="roundsModeDialog"
    // className="mode-page action-dialog" role="dialog"
    // aria-modal="true" aria-labelledby="roundFormHeader" tabIndex="0">
    // <h1 id="roundFormHeader" className="mode-page-header">
    //   Hole {holeNumber}
    // </h1>
    // <h2 className="mb-3 centered">
    //     <span> 
    //       Record Hole-Out Time:
    //     </span>
    // </h2> */}

    {/* <div className="round-page-btn-container-live">
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

  </div>}*/}
    </>
  );
};