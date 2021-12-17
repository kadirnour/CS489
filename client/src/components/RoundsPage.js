import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundsMode  from './RoundsMode.js';
import RoundsTable from './RoundsTable.js';
import RoundForm from './RoundForm.js';
import FloatingButton from './FloatingButton.js'
import LiveRoundForm from './LiveRoundForm.js'

function RoundsPage(props){
    
            const [state, setState] = useState()
            const [mode, setMode] = useState(RoundsMode.ROUNDSTABLE)
            const [deleteId, setDeleteId] = useState(-1)
            const [editId, setEditId]= useState(-1)        
            console.log(mode)

   const SetMode = (newMode) => {
        setMode(newMode);
        props.toggleModalOpen()
    }

    const initiateEditRound = (val) => {
        setEditId(val)
        setMode(RoundsMode.EDITROUND) 
        setState(props.toggleModalOpen)
    }
    
    const initiateDeleteRound = (val) => {
        setDeleteId(val);
        alert("Confirm delete goes here!");
    }

    if(mode == RoundsMode.ROUNDSTABLE)
    {
        console.log(mode)
            return (
                <>
                    <RoundsTable rounds={props.rounds}
                                initiateDeleteRound={initiateDeleteRound}
                                deleteRound={props.deleteRound} 
                                deleteId={deleteId}
                                initiateEditRound= {initiateEditRound}
                                updateRound= {props.updateRound}
                                setMode={SetMode} 
                                toggleModalOpen={props.toggleModalOpen}
                                menuOpen={props.menuOpen} /> 
                    <FloatingButton
                    
                        icon="calendar"
                        label={"Log Round"}
                        menuOpen={props.menuOpen}
                        action={()=>SetMode(RoundsMode.LIVESELECT)}

                           />
            </>
            );
                        }
        if(mode == RoundsMode.LOGROUND)
        {
            console.log(mode)
            return (
            <RoundForm mode={mode}
                    roundData={null}
                    saveRound={props.addRound}
                    setMode={SetMode}
                    toggleModalOpen={props.toggleModalOpen} />
            );
        }
        if(mode == RoundsMode.EDITROUND){
            console.log(mode)
            return (
            <RoundForm mode={mode}
                editId = {editId}
                roundData={props.rounds[editId]}
                saveRound={props.updateRound}
                setMode={SetMode}
                toggleModalOpen={props.toggleModalOpen} />
                );
            }
        if(mode == RoundsMode.LIVESELECT){
            console.log(mode)
            return (
                <div id="roundsModeDialog" className="mode-page action-dialog" role="dialog"
                    aria-modal="true" aria-labelledby="roundFormHeader" tabIndex="0">
                    <h1 id="roundFormHeader" className="mode-page-header">
                        {props.mode === RoundsMode.LOGROUND ? "Log Round" : "Edit Round"}
                    </h1>
                    <div className="round-form-btn-container">
                        <button type="button"
                        className="mode-page-btn action-dialog action-button"
                        onClick={() => {
                            SetMode(RoundsMode.LIVEROUND);
                        }}>
                            <FontAwesomeIcon icon="clock" />
                            <span>&nbsp;Track Live (GUI)</span>
                        </button>
                        <button type="button"
                        className="mode-page-btn action-dialog action-button"
                        onClick={() => {
                            SetMode(RoundsMode.LOGROUND);
                        }}>
                            <FontAwesomeIcon icon="clipboard-check" />
                            <span>Log Previously Played</span>
                        </button>
                    </div> 
            </div>
            );
        }
        if(mode == RoundsMode.LIVEROUND){
            return (
                <LiveRoundForm  setMode={SetMode}
                                saveRound={props.addRound}/>
                    );
        }
            else{
                console.log(mode)
                return null;
            }
        
    }
export default RoundsPage;