import React, { useState } from 'react';
import AppMode from './AppMode';

/**
 * ModeTabs():
 * Renders the navigation tabs for the SpeedScore web app, changing the value of the mode the app is in.
 * @param {props} the properties of the current state of the application.
 */
function ModeTabs(props) {

    const handleModeChange = e => {
        props.setMode(e.target.value);
    }

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
                    onClick={handleModeChange}
                    value={AppMode.FEED}>
                    Feed
                </button>
                <button id="roundsMode" type="button"
                    className={"modetab-btn" +
                        (props.mode === AppMode.ROUNDS ? " modetab-selected" : "")}
                    role="tab" tabIndex="-1" aria-selected="false"
                    aria-controls="roundsModeTab"
                    onClick={handleModeChange}
                    value={AppMode.ROUNDS}>
                    Rounds
                </button>
                <button id="coursesMode" type="button"
                    className={"modetab-btn" +
                        (props.mode === AppMode.COURSES ? " modetab-selected" : "")}
                    role="tab" tabIndex="-1" aria-selected="false"
                    aria-controls="coursesModeTab"
                    onClick={handleModeChange}
                    value={AppMode.COURSES}>
                    Courses
                </button>
                <button id="buddiesMode" type="button"
                    className={"modetab-btn" +
                        (props.mode === AppMode.BUDDIES ? " modetab-selected" : "")}
                    role="tab" tabIndex="-1" aria-selected="false"
                    aria-controls="buddiesModeTab"
                    onClick={handleModeChange}
                    value={AppMode.BUDDIES}>
                    Buddies
                </button>
            </div> : null
    );
     
};

// class ModeTabs extends React.Component {
//     render() {
//       return(
//         (this.props.mode !== AppMode.LOGIN && !this.props.modalOpen) ?
//         <div id="modeTabs" 
//              className={"modetab-container" + (this.props.menuOpen ? " disabled" : "")}  
//              role="tablist" 
//              aria-label="App Modes">
//             <button id="feedMode" type="button" 
//                 className={"modetab-btn" + 
//                   (this.props.mode === AppMode.FEED ? " modetab-selected" : "")}
//                 role="tab" tabIndex="0" aria-selected="true" 
//                 aria-controls="feedModeTab"
//                 onClick={() => this.props.setMode(AppMode.FEED)}>
//                 Feed
//             </button>
//             <button id="roundsMode" type="button" 
//                 className={"modetab-btn" +  
//                     (this.props.mode === AppMode.ROUNDS ? " modetab-selected" : "") } 
//                 role="tab" tabIndex="-1" aria-selected="false" 
//                 aria-controls="roundsModeTab"
//                 onClick={() => this.props.setMode(AppMode.ROUNDS)}>
//                 Rounds
//             </button>
//             <button id="coursesMode" type="button" 
//                 className={"modetab-btn" +  
//                     (this.props.mode === AppMode.COURSES ? " modetab-selected" : "") } 
//                 role="tab" tabIndex="-1" aria-selected="false" 
//                 aria-controls="coursesModeTab"
//                 onClick={() => this.props.setMode(AppMode.COURSES)}>
//                 Courses
//             </button>
//             <button id="buddiesMode" type="button" 
//                 className={"modetab-btn" +  
//                     (this.props.mode === AppMode.BUDDIES ? " modetab-selected" : "") } 
//                 role="tab" tabIndex="-1" aria-selected="false" 
//                 aria-controls="buddiesModeTab"
//                 onClick={() => this.props.setMode(AppMode.BUDDIES)}>
//                 Buddies
//             </button>
//         </div> : null
//         );
//     }
// }

export default ModeTabs;
