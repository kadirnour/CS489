import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundsMode  from './RoundsMode.js';
import RoundsTable from './RoundsTable.js';
import RoundForm from './RoundForm.js';
import FloatingButton from './FloatingButton.js'

function RoundsPage(props){
    
            const [state, setState] = useState()
            const [mode, setMode] = useState(RoundsMode.ROUNDSTABLE)
            const [deleteId, setDeleteId] = useState(-1)
            const [editId, setEditId]= useState(-1)        
    

   const SetMode = (newMode) => {
        setMode(newMode);
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

    const run = () => {
        switch (mode) {
        case RoundsMode.ROUNDSTABLE: 
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
                        action={()=>setMode(RoundsMode.LOGROUND),
                                this.props.toggleModalOpen} />
            </>
            );
        case RoundsMode.LOGROUND:
            return (
            <RoundForm mode={mode}
                    roundData={null}
                    saveRound={props.addRound}
                    setMode={SetMode}
                    toggleModalOpen={props.toggleModalOpen} />
            );
        case RoundsMode.EDITROUND:
            return (
            <RoundForm mode={mode}
                editId = {editId}
                roundData={props.rounds[editId]}
                saveRound={props.updateRound}
                setMode={SetMode}
                toggleModalOpen={props.toggleModalOpen} />
                );
            default:
                return null;
        }
    }  
    run();
}

/*
function RoundsPage (props){
    const [state, setState] = useState(() => {
 
    });
    const [mode, setMode] = useState('');
    const [deleteId, setDeleteId] = useState('');
    const [editId, setEditId] = useState('');

    const initiateEditRound = (val) => {
        setEditId({val,
                       mode: RoundsMode.EDITROUND}, 
                       props.toggleModalOpen);
    }
    
    const initiateDeleteRound = (val) => {
        setDeleteId({val},
        () => alert("Confirm delete goes here!"));
    }

       const run = () => {
           alert("in run");
        switch(state.mode) {
        case RoundsMode.ROUNDSTABLE: 
            return (
                <>
                    <RoundsTable rounds={props.rounds}
                                initiateDeleteRound={initiateDeleteRound}
                                deleteRound={props.deleteRound} 
                                deleteId={deleteId}
                                initiateEditRound= {initiateEditRound}
                                updateRound= {props.updateRound}
                                setMode={setMode} 
                                toggleModalOpen={props.toggleModalOpen}
                                menuOpen={props.menuOpen} /> 
                    <FloatingButton
                        icon="calendar"
                        label={"Log Round"}
                        menuOpen={props.menuOpen}
                        action={()=>setState({mode: RoundsMode.LOGROUND},
                                    props.toggleModalOpen)} />
            </>
            );
        case RoundsMode.LOGROUND:
            return (
            <RoundForm mode={mode}
                    roundData={null}
                    saveRound={props.addRound}
                    setMode={setMode}
                    toggleModalOpen={props.toggleModalOpen} />
            );
        case RoundsMode.EDITROUND:
            return (
            <RoundForm mode={mode}
                editId = {editId}
                roundData={props.rounds[editId]}
                saveRound={props.updateRound}
                setMode={setMode}
                toggleModalOpen={props.toggleModalOpen} />
                );
            default:
                alert("null");
                return null;
        }
       }
       alert("before run");
       run();
}  
*/


export default RoundsPage;