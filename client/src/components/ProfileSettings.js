import React from 'react';
import profilePic from '../images/DefaultProfilePic.jpg';
import AppMode from './AppMode.js';

class ProfileSettings extends React.Component {


    render() {
        return (
            <>
            <button id="profileBtn" type="button" 
                className="navbar-btn navbar-profile-btn"
                aria-label="Account and Profile Settings"
                onClick={() => {this.props.toggleProfileOpen();
                    this.props.toggleModalOpen();
                }}
                style={{backgroundImage: this.props.userData.identityData.profilePic === "" ? 
                            `url(${profilePic})` : 
                            `url(${this.props.userData.identityData.profilePic})`}}
                >
            </button>
            
            </>
         ); 

   }
}

export default ProfileSettings;