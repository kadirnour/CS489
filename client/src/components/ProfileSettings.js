import React from 'react';

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
                >
            </button>
            
            </>
         ); 

   }
}

export default ProfileSettings;