import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import RoundsMode  from './RoundsMode.js';

/**
 * RoundForm():
 * Displays the round form for both adding a new round and modifying an existing round.
 * Function allows changes to current information in the web application.
 * @param {props} the properties of the current state the application is in.
 */
function RoundForm(props) {
  const [state, setState] = useState(() => {
    let today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000);
    return props.mode === RoundsMode.LOGROUND
      ? {
          date: today.toISOString().slice(0, 10),
          course: "",
          type: "practice",
          holes: "18",
          strokes: 80,
          minutes: 60,
          seconds: "00",
          SGS: "140:00",
          notes: "",
          imageName: "",
          imageUrl: "",
          btnIcon: "calendar",
          btnLabel: "Log Round",
        } : {
          ...props.roundData,
          btnIcon: "edit",
          btnLabel: "Update Round",
        };
  });
  const [file, setFile] = useState();

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

  const handleFileUploadSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    try {
      const res = await fetch("/upload", {
        method: "POST",
        body: data,
      });
      if (res.status === 200) {
        const json = await res.json();
        console.log("upload response json", json);
        setState((prev) => ({ ...prev, imageName: json.imageName, imageUrl: json.imageUrl }));
        // setMessage("File Uploaded");
      }
    } catch (err) {
      setState((prev) => ({ ...prev, imageName: "", imageUrl: "" }));
      // if (err.response.status === 500) {
      //   setMessage("There was a problem with the server");
      // } else {
      //   setMessage(err.response.data.message);
      // }
    }
  };

    
  return (
    <div id="roundsModeDialog"
      className="mode-page action-dialog" role="dialog"
      aria-modal="true" aria-labelledby="roundFormHeader" tabIndex="0">
      <h1 id="roundFormHeader" className="mode-page-header">
        {props.mode === RoundsMode.LOGROUND ? "Log Round" : "Edit Round"}
      </h1>
      <form onSubmit={handleFileUploadSubmit}>
        <div className="mt-4 mb-3 centered">
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
            <input type="submit" value="Upload File" className="btn btn-primary mx-3" />
          </div>
        </div>
      </form>
      <form id="logRoundForm"
        onSubmit={handleSubmit} noValidate>
        <div className="mb-3 centered">
          <label htmlFor="roundDate" className="form-label">Date:
            <input id="roundDate" name="date"
              className="form-control centered" type="date"
              aria-describedby="roundDateDescr" value={state.date}
              onChange={handleDataChange} required />
          </label>
          <div id="roundDateDescr" className="form-text">
            Enter a valid date
          </div>
        </div>
        <div className="mb-3 centered">
          <label htmlFor="roundCourse" className="form-label">Course:
            <input id="roundCourse" name="course"
              className="form-control centered" type="text"
              aria-describedby="roundCourseDescr"
              size="50" maxLength="50" value={state.course}
              onChange={handleDataChange} required />
          </label>
          <div id="roundCourseDescr" className="form-text">
            Enter a course name of at most 50 characters
          </div>
        </div>
        <div className="mb-3 centered">
          <label htmlFor="roundType">Type:
            <select id="roundType" name="type"className="form-control centered"
              value={state.type} onChange={handleDataChange}>
              <option value="practice">Practice</option>
              <option value="tournament">Tournament</option>
            </select>
          </label>
        </div>
        <div className="mb-3 centered">
          <label htmlFor="roundHoles">Holes:
            <select id="roundHoles" name="holes"
              className="form-control centered" value={state.holes} onChange={handleDataChange}>
              <option value="9">9</option>
              <option value="18">18</option>
            </select>
          </label>
        </div>
        <div className="mb-3 centered">
          <label htmlFor="roundStrokes">Strokes:
            <input id="roundStrokes" name="strokes" className="form-control centered" type="number"
              min="9" max="200" value={state.strokes} aria-describedby="roundStrokesDescr"
              onChange={handleDataChange} required />
          </label>
          <div id="roundStrokesDescr" className="form-text">
            Enter a strokes value between 9 and 200
          </div>
        </div>
        <div className="mb-3 centered">
          <label htmlFor="roundMinutes">Time:
            <input id="roundMinutes" name="minutes" type="number" size="3"
              aria-describedby="roundTimeDescr"
              min="10" max="400" value={state.minutes} style={{ textAlign: "right" }}
              onChange={handleDataChange} required /> :
            <input id="roundSeconds" name="seconds" type="number" size="2"
              aria-describedby="roundTimeDescr"
              min="0" max="60" value={state.seconds} onChange={handleDataChange}
              required />
          </label>
          <div id="roundTimeDescr" className="form-text">
            Enter a minutes value between 10 and 400, and a seconds value between 0 and 59
          </div>
        </div>
        <div className="mb-3 centered">
          <label htmlFor="roundSGS">Speedgolf Score:
            <input name="SGS" className="form-control centered" type="text"
              size="6" value={state.SGS} readOnly={true} />
          </label>
        </div>
        <div className="mb-3 centered">
          <label htmlFor="roundImage">
            Image:
            {state.imageName !== "" ? (
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <span style={{ marginRight: "25px" }}>{state.imageName} </span>
                <img style={{ height: "200px" }} src={state.imageUrl} alt="" />
              </div>
            ) : (
              <div className="form-text">No image has been uploaded for this round.</div>
            )}
          </label>
        </div>
        <div className="mb-3 centered">
          <label htmlFor="roundNotes">Notes:
            <textarea name="notes" id="roundNotes" className="form-control centered"
              aria-describedby="roundNotesDescr"
              rows="6" cols="75" maxLength="500"
              value={state.notes} onChange={handleDataChange}>
            </textarea>
          </label>
          <div id="roundNotesDescr" className="form-text">
            Enter optional round notes of up to 500 characters
          </div>
        </div>
        <div className="mode-page-btn-container">
          <button id="roundSubmit" type="submit" className="mode-page-btn action-dialog action-button">
            <FontAwesomeIcon icon={state.btnIcon} className={state.btnIcon === "spinner" ? "fa-spin" : ""} />
            <span>&nbsp;{state.btnLabel}</span>
          </button>
          <button type="button"
            className="mode-page-btn-cancel action-dialog cancel-button"
            onClick={() => {
              props.setMode(RoundsMode.ROUNDSTABLE);
              props.toggleModalOpen();
            }}>
            <FontAwesomeIcon icon="window-close" />
            <span>&nbsp;Cancel</span>
          </button>
        </div>
      </form>
    </div>
  );
 }


  
export default RoundForm;