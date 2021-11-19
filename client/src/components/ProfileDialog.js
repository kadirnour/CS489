import React from 'react';
import AppMode from './AppMode.js'
import logo from '../images/sslogo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from './../images/DefaultProfilePic.jpg'

class ProfileDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            securityQuestion: "",
            securityAnswer: "",
            displayName: this.props.userData.identityData.displayName,
            profilePic: "",
            passwordValid: true,
            securityQuestionValid: true,
            securityAnswerValid: true,
          };
        this.formSubmitted = false;
        this.passwordError = React.createRef();
        this.repeatPasswordError = React.createRef();
        this.securityQuestionError = React.createRef();
        this.securityAnswerError = React.createRef();
    }

    passwordIsValid = (pass) => {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return re.test(String(pass));
    }
    
    handleChange = (event) => {

        if (event.target.name !== "profilePic") {
            this.setState({[event.target.name]: event.target.value});
            return;
          } 
          if (event.target.value.length == 0) {
            this.setState({profilePic: ""});
          } else {
            const self = this;
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener("load",function() {
                self.setState({profilePic: this.result});
            });
          }  
    }

    componentDidUpdate() {
        if (this.formSubmitted) {
          if (!this.state.securityAnswerValid) {
              this.securityAnswerError.current.focus();
          }
          if (!this.state.securityQuestionValid) {
              this.securityQuestionError.current.focus();
          }
          if (!this.state.passwordValid) {
              this.passwordError.current.focus();
          }
          this.formSubmitted = false;
        }
    }
  
    handleSubmit = (event) => {
        event.preventDefault();
        //Are fields valid?
        const pValid = this.passwordIsValid(this.state.password) || this.state.password === "";
        const sqValid = (this.state.securityQuestion.length > 0) || this.state.securityQuestion === "";
        const saValid = (this.state.securityAnswer.length > 0) || this.state.securityAnswer === "";

        if (pValid && sqValid && saValid) { 
            this.setState({btnIcon: "spinner", btnLabel: "Saving..."},this.handleSubmitCallback);
        } else {
            this.formSubmitted = true;
        }
    }

    handleSubmitCallback = async() => {
        
        const newUserData = {
            accountData: {
                id: this.props.userData.accountData.id,
                password: (this.state.password !== "" && this.state.passwordValid ? this.state.password : this.props.userData.accountData.password),
                securityQuestion: (this.state.securityQuestion !== "" && this.state.securityQuestion ? this.state.securityQuestion : this.props.userData.accountData.securityQuestion),
                securityAnswer: (this.state.securityAnswer !== "" && this.state.securityAnswer ? this.state.securityAnswer : this.props.userData.accountData.securityAnswer),
            },
            identityData: {
                displayName: (this.state.displayName !== "" ? this.state.displayName : this.props.userData.identityData.displayName),
                profilePic: (this.state.profilePic !== "" ? this.state.profilePic : this.props.userData.identityData.profilePic),
            },
            speedgolfData: this.props.userData.speedgolfData,
            rounds: this.props.userData.rounds
        };
        
        const res = await this.props.updateUserData(newUserData);
        this.props.toggleModalOpen();
        this.props.toggleProfileOpen();
    }

    renderErrorBox = () => {
        if (this.state.passwordValid &&
            this.state.securityQuestionValid &&
            this.state.securityAnswerValid) {
            return null;
        }
        return (
        <p id="errorBox" className="alert alert-danger centered">
          {!this.state.passwordValid && 
            <a id="passwordError" href="#password" 
                className="alert-link" 
                ref={this.passwordError}>
                Enter a valid password<br/>
            </a>
          }
           {!this.state.securityQuestionValid && 
            <a id="securityQuestionError" href="#securityQuestion" 
                className="alert-link" 
                ref={this.securityQuestionError}>
                Enter a valid security question<br/>
            </a>
          }
          {!this.state.securityAnswerValid && 
            <a id="securityAnswerError" href="#securityError" 
                className="alert-link" 
                ref={this.securityAnswerError}>
                Enter a valid security answer<br/>
            </a>
          }
        </p>
        );
    }

    /*
    componentDidLoad() {
        this.setState({displayName: this.props.userData.identityData.displayName,
            profilePic: this.props.userData.identityData.profilePic,
            securityQuestion: this.props.userData.accountData.securityQuestion,
            securityAnswer: this.props.userData.accountData.securityAnswer,   
        });
    }*/

    render() {

            return(
                <div ref={this.dialogContent}
                    className={"mode-page action-dialog" + ( this.props.profileOpen === false ? " hidden" : "")}
                    aria-label="User Settings Dialog" tabIndex="0"
                    onClick={this.props.menuOpen? this.props.toggleMenuOpen : null}
                    onKeyDown={this.handleKeyPress}
                    >
                <h1 className="mode-page-header">Account & Profile</h1>
                <p className="mode-page-content">Edit Your Information</p>

                {this.renderErrorBox()}
                <form id="editProfileForm" 
                  onSubmit={this.handleSubmit} noValidate>

                    <div className="mb-3 centered">
                        <label htmlFor="profileDisplayName" className="form-label">Display Name:
                            <input id="profileDisplayName" name="displayName" 
                                className="form-control centered" type="text" 
                                aria-describedby="displayNameDescr"
                                size="50" maxLength="50"  value={this.state.displayName} 
                                onChange={this.handleChange} required />
                        </label>
                        <div id="roundCourseDescr" className="form-text">
                        Enter a valid display name
                        </div>
                    </div>
                    <div className="mb-3 centered">
                        <label htmlFor="profilePic" className="form-label">
                            Profile Picture:<br/>
                            <img id="acctProfilePicImage" 
                                src={this.state.profilePic == "" ? profilePic :
                                this.state.profilePic} 
                                className="fm-profile-pic" height="46" width="auto"/>
                            <input id="profilePic"
                            
                                onChange={this.handleChange}
                                className="form-control centered"
                                name="profilePic"
                                type="file"
                                accept=".png, .gif, .jpg"
                                aria-describedby="profilePicDescr"
                            />
                        </label>
                        <div id="profilePicDescr" className="form-text">
                            A profile picture that represents you in the app (defaults to a generic picture)
                        </div>
                    </div>
                    <div className="mb-3 centered">
                        <label htmlFor="profileSecurityQuestion" className="form-label">Security Question:
                            <input id="profileSecurityQuestion" name="securityQuestion" 
                                className="form-control centered" type="text" 
                                aria-describedby="securityQuestionDescr"
                                size="50" maxLength="50"  value={this.state.securityQuestion} 
                                onChange={this.handleChange} required />
                        </label>
                        <div id="securityQuestionDescr" className="form-text">
                        Enter a valid security question
                        </div>
                    </div>
                    <div className="mb-3 centered">
                        <label htmlFor="profileSecurityAnswer" className="form-label">Security Question Answer:
                            <input id="profileSecurityAnswer" name="securityAnswer" 
                                className="form-control centered" type="text" 
                                aria-describedby="securityAnswerDescr"
                                size="50" maxLength="50"  value={this.state.securityAnswer} 
                                onChange={this.handleChange} required />
                        </label>
                        <div id="securityAnswerDescr" className="form-text">
                        Enter a valid security question answer
                        </div>
                    </div>
                    <div className="mb-3 centered">
                        <label htmlFor="profilePassword" className="form-label">New Password:
                            <input id="profilePassword" name="password" 
                                className="form-control centered" type="password" 
                                aria-describedby="passwordDescr"
                                size="50" maxLength="50"  value={this.state.password} 
                                onChange={this.handleChange} required />
                        </label>
                        <div id="passwordDescr" className="form-text">
                        Enter a valid password (leave blank if you don't want to change)
                        </div>
                    </div>

                


                    <div className="mode-page-btn-container">
                        <button type="submit" className="mode-page-btn action-dialog action-button">
                            <FontAwesomeIcon icon={this.state.btnIcon}  className={this.state.btnIcon == "spinner" ? "fa-spin" : ""}/>
                            <span>&nbsp;{this.state.btnLabel}</span>
                        </button>
                        <button type="button" 
                                className="mode-page-btn-cancel action-dialog cancel-button"
                                onClick={() => {
                                                this.props.toggleModalOpen(); this.props.toggleProfileOpen();}}>
                        <FontAwesomeIcon icon="window-close"/>
                        <span>&nbsp;Cancel</span>
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}

export default ProfileDialog;