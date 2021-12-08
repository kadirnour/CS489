import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * FloatingButton():
 * Renders the floating button on the Round Page to log a new round.
 * @param {props} the inherited properties of current state.
 */
function FloatingButton(props) {
       return (
        <button id="roundsModeActionBtn"  type="button" 
                className="float-btn" onClick={props.action}>
          <FontAwesomeIcon icon={props.icon}/>
            &nbsp;{props.label}
        </button>
    ); 
}

export default FloatingButton;