import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/sslogo.png'
import profilePic from '../images/DefaultProfilePic.jpg';
import AppMode from './AppMode';
import ProfileSettings from './ProfileSettings';

function NavBar(props) {
    
    
       return (
        <header className="navbar">  
        <a id="sLink" className="skip-link" tabIndex="0">
         Skip to content</a>
         {props.mode != AppMode.LOGIN && !props.modalOpen ?
         <button id="menuBtn" type="button" className="navbar-btn" 
            title="Menu" aria-controls="sideMenu" 
            aria-label="Actions" aria-haspopup="true" 
            aria-expanded={props.menuOpen ? "true" : "false"}
            onClick={props.toggleMenuOpen}>
            <FontAwesomeIcon 
              icon={props.menuOpen ? "times" : "bars"}
              className="navbar-btn-icon"/>
          </button> : null }
          <img src={logo} className="navbar-app-icon" 
            alt="SpeedScore logo" />
           <h1 id="appName" className="navbar-title">SpeedScore</h1> 
           {props.mode != AppMode.LOGIN && !props.modalOpen ?
             <div className="navbar-right-items">
                <input id="searchBox" className="form-control hidden" 
                aria-label="Search Rounds" size="30"
                type="search" />
                <button id="searchBtn" type="button" className="navbar-btn" 
                    aria-label="Open Rounds Search">
                    <FontAwesomeIcon icon="search" className="navbar-btn-icon"/>
                </button>
                <ProfileSettings
                    mode={props.mode}
                    profileOpen={props.profileOpen} 
                    toggleProfileOpen={props.toggleProfileOpen} 
                    toggleModalOpen={props.toggleModalOpen}
                    userData={props.userData}
                    />
              </div> : 
              <div className="navbar-right-items"></div>}
      </header>
    ); 
  }


export default NavBar;