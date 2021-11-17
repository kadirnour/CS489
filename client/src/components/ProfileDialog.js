import React from 'react';
import AppMode from './AppMode.js'
import logo from '../images/sslogo2.png'

class ProfileDialog extends React.Component {

    constructor(props) {
        super(props);
        this.saveBtn = React.createRef();
        this.cancelBtn = React.createRef();
        this.dialogContent = React.createRef();
        this.state = {focusedItem: 1 };
    }

    componentDidMount() {
        this.dialogContent.current.focus();
    }
    
    handleKeyPress = (e) => {
        e.preventDefault();
        if (e.key === 'Tab' || e.key === 'ArrowRight') {
            if (this.state.focusedItem === 1) {
            this.saveBtn.current.focus();
            this.setState({focusedItem: 2});
            } else if (this.state.focusedItem === 2) {
            this.cancelBtn.current.focus();
            this.setState({focusedItem: 3});
            } else if (this.state.focusedItem === 3) {
            this.dialogContent.current.focus();
            this.setState({focusedItem: 1});
            }
        } 
    }

    render() {
            return(
                <div ref={this.dialogContent}
                    className={"mode-page action-dialog" + ( this.props.profileOpen === false ? " hidden" : "")}
                    aria-label="User Settings Dialog" tabIndex="0"
                    onClick={this.props.menuOpen? this.props.toggleMenuOpen : null}
                    onKeyDown={this.handleKeyPress}
                    >
                <h1 className="mode-page-header">Account & Profile</h1>
                <p className="mode-page-content">This page is under construction.</p>
                <img className="mode-page-icon" 
                     src={logo} alt="SpeedScore logo"></img>

                <div className="mode-page-btn-container">
                    <button ref={this.saveBtn}
                            className="mode-page-btn dialog-primary-btn" 
                            type="button" onClick={() => {
                                this.props.toggleProfileOpen();
                                this.props.toggleModalOpen();
                            }}>Save</button>
                    <button ref={this.cancelBtn}
                            className="mode-page-btn action-dialog cancel-button"
                            type="button" onClick={() => {
                                this.props.toggleProfileOpen();
                                this.props.toggleModalOpen();
                            }}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default ProfileDialog;