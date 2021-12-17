import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundsMode  from './RoundsMode.js';
import RoundsTable from './RoundsTable.js';
import RoundForm from './RoundForm.js';
import PreviousRoundForm from './RoundForm.js';
import FloatingButton from './FloatingButton.js'

function RoundsPage(props){
    
    const [mode, setMode] = useState(RoundsMode.ROUNDSTABLE)
    const [editId, setEditId]= useState(-1)        
    console.log(mode)

   const SetMode = (newMode) => {
        setMode(newMode);
        props.toggleModalOpen()
    }

    const initiateEditRound = (val) => {
        setEditId(val)
        setMode(RoundsMode.EDITROUND) 
        //setState(props.toggleModalOpen)
    }
    
    const initiateDeleteRound = (idx) => {
        //setDeleteId(val);
        //alert("Confirm delete goes here!");
        if (window.confirm(`Do you want to delete this round?`)) {
            props.deleteRound(idx);
        }

    }

    if(mode == RoundsMode.ROUNDSTABLE)
    {
        console.log(mode)
            return (
                <>
                    <RoundsTable rounds={props.rounds}
                                initiateDeleteRound={initiateDeleteRound}
                                deleteRound={props.deleteRound} 
                                initiateEditRound= {initiateEditRound}
                                setMode={SetMode} 
                                toggleModalOpen={props.toggleModalOpen}
                                menuOpen={props.menuOpen} /> 
                    <FloatingButton
                    
                        icon="calendar"
                        label={"Log Round"}
                        menuOpen={props.menuOpen}
                        action={()=>SetMode(RoundsMode.LOGROUND)}

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
            <PreviousRoundForm mode={mode}
                editId = {editId}
                roundData={props.rounds[editId]}
                saveRound={props.updateRound}
                setMode={SetMode}
                toggleModalOpen={props.toggleModalOpen} />
                );
            }
            else{
                console.log(mode)
                return null;
            }
        
    } 
export default RoundsPage;