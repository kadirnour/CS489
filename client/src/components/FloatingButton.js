import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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