import React, { useState } from 'react';
import AppMode from './AppMode';


/*TODO: Tasks to change from class to hooks
https://www.digitalocean.com/community/tutorials/five-ways-to-convert-react-class-components-to-functional-components-with-react-hooks
https://nimblewebdeveloper.com/blog/convert-react-class-to-function-component
  1) Add useStates
  2) Add handlers for states    
  3) Connect useState variables to the "values" and "onChange" events in return
*/

function ModeTabs(props) {
    return (
    (props.mode !== AppMode.LOGIN && !props.modalOpen) ?
    <div id="modeTabs" 
            className={"modetab-container" + (props.menuOpen ? " disabled" : "")}  
            role="tablist" 
            aria-label="App Modes">
                <button id="feedMode" type="button"
                    className={"modetab-btn" +
                        (props.mode === AppMode.FEED ? " modetab-selected" : "")}
                    role="tab" tabIndex="0" aria-selected="true"
                    aria-controls="feedModeTab"
                onClick={(e) => props.setMode(AppMode.FEED)}>
            Feed
        </button>
        <button id="roundsMode" type="button" 
            className={"modetab-btn" +  
                (props.mode === AppMode.ROUNDS ? " modetab-selected" : "") } 
            role="tab" tabIndex="-1" aria-selected="false" 
            aria-controls="roundsModeTab"
            onClick={(e) => props.setMode(AppMode.ROUNDS)}>
            Rounds
        </button>
        <button id="coursesMode" type="button" 
            className={"modetab-btn" +  
                (props.mode === AppMode.COURSES ? " modetab-selected" : "") } 
            role="tab" tabIndex="-1" aria-selected="false" 
            aria-controls="coursesModeTab"
            onClick={(e) => props.setMode(AppMode.COURSES)}>
            Courses
        </button>
        <button id="buddiesMode" type="button" 
            className={"modetab-btn" +  
                (props.mode === AppMode.BUDDIES ? " modetab-selected" : "") } 
            role="tab" tabIndex="-1" aria-selected="false" 
            aria-controls="buddiesModeTab"
            onClick={props.handleModeChange}
                value={(e) => props.setMode(AppMode.BUDDIES)}>
                Buddies
        </button>
    </div> : null
    );
     
};

export default ModeTabs;
