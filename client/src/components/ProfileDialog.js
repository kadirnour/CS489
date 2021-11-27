import React from 'react';
import AppMode from './AppMode.js'
import logo from '../images/sslogo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from './../images/DefaultProfilePic.jpg'
import { Accordion } from "react-bootstrap";

class ProfileDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            /*
            accountData: {
                password: "",
                securityQuestion: "",
                securityAnswer: "",
            },
            identityData: {
                displayName: "",
                profilePic: "",
            },
            speedgolfData: {
                bio: "",
                homeCourse: "",
                clubComments: "",
            },*/

            password: "",
            securityQuestion: "",
            securityAnswer: "",
            displayName: "",
            profilePic: "",
            bio: "",
            homeCourse: "",
            clubComments: "",

            //tab1Open: true,
            //tab2Open: false,
            //tab3Open: false,
            
            formSubmitted: false,
            securityAnswerValid: true,
            securityQuestionValid: true,
          };
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
          this.formSubmitted = false;
        }
    }
  
    handleSubmit = (event) => {
        event.preventDefault();
        //Are fields valid?
        const sqValid = (this.state.securityQuestion.length > 5) || this.state.securityQuestion === "";
        const saValid = (this.state.securityAnswer.length > 5) || this.state.securityAnswer === "";

        if (sqValid && saValid) { 
            this.setState({btnIcon: "spinner", btnLabel: "Saving..."},this.handleSubmitCallback);
        } else {
            //At least one field invalid
            //Clear out invalid fields and display errors
            this.formSubmitted = true; //Ensures error message gets focus
            this.setState({
                          securityQuestionValid: sqValid,
                          securityAnswerValid: saValid,
                          });
        }
    }

    handleSubmitCallback = async() => {

        const newUserData = {
            accountData: {
                id: this.props.userData.accountData.id,
                password: (this.state.password !== "" ? this.state.password : (this.props.userData.accountData.password !== null ? this.props.userData.accountData.password : "")),
                securityQuestion: (this.state.securityQuestion !== "" ? this.state.securityQuestion : this.props.userData.accountData.securityQuestion),
                securityAnswer: (this.state.securityAnswer !== "" ? this.state.securityAnswer : this.props.userData.accountData.securityAnswer),
            },
            identityData: {
                displayName: (this.state.displayName !== "" ? this.state.displayName : this.props.userData.identityData.displayName),
                profilePic: (this.state.profilePic !== "" ? this.state.profilePic : this.props.userData.identityData.profilePic),
            },
            speedgolfData: {
                bio: (this.state.bio !== "" ? this.state.bio : this.props.userData.speedgolfData.bio),
                homeCourse: (this.state.homeCourse !== "" ? this.state.homeCourse : this.props.userData.speedgolfData.homeCourse),
                clubComments: (this.state.clubComments !== "" ? this.state.homeCourse : this.props.userData.speedgolfData.homeCourse),
            },
            //rounds: this.props.userData.rounds
        };
        
        const res = await this.props.updateAccount(newUserData);
        this.props.toggleModalOpen();
        this.props.toggleProfileOpen();
    }

    renderErrorBox = () => {
        if (
            this.state.securityQuestionValid &&
            this.state.securityAnswerValid) {
            return null;
        }
        return (
        <p id="errorBox" className="alert alert-danger centered">
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

    render() {
            
            return(

                    
                <div id="profileSettingsDialog" className={"mode-page action-dialog" + ( this.props.profileOpen === false ? " hidden" : "")}
                    role="dialog" aria-modal="true" 
                    aria-labelledby="accountProfileHeader">
                  <h1 id="accountProfileHeader" className="mode-page-header">Account & Profile</h1>
                  {this.renderErrorBox()}
                  
                  <form id="editProfileForm" className="centered" onSubmit={this.handleSubmit} noValidate>
                    <div id="profileFormAccordion" className="accordion">
                      <div className="accordion-item">
                        <form>
                          <h2 className="accordion-header" id="accountHeader">
                            <button id="accountSettingsBtn" className="accordion-button" type="button"
                              data-bs-toggle="collapse" data-bs-target="#accountSettingsPanel" 
                              aria-expanded="true" 
                              aria-controls="accountSettingsPanel"
                              
                              >
                              <legend>Account</legend>
                            </button>
                          </h2>
                          <div id="accountSettingsPanel" 
                              className="accordion-collapse collapse show"
                              aria-labelledby="accountHeader" 
                              data-bs-parent="#profileFormAccordion"
                              >
                            <div className="accordion-body">
                            <div className="mb-3">
                              <label for="profileEmail" className="form-label">Email:
                                  <input id="profileEmail" type="email" className="form-control centered"
                                  aria-describedby="profileEmailDescr" readonly
                                  value=""
                                  />
                              </label>
                              <div id="profileEmailDescr" className="form-text">
                                Enter a valid email address (e.g., 'name@domain.com').
                              </div>
                            </div>
                            <div className="mb-3">
                              <label for="profilePassword" className="form-label">Password:
                                  <input id="profilePassword" type="password" className="form-control centered"
                                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                                  aria-describedby="profilePasswordDescr"
                                  value={this.state.password}
                                  readonly />
                              </label>
                              <div id="profilePasswordDescr" className="form-text">
                                Use the "Reset Password" option on the Log In page to reset your password.
                              </div>
                            </div>
                            <div className="mb-3">
                              <label for="profileSecurityQuestion" className="form-label">Security Question:
                                  <input id="profileSecurityQuestion" type="text" className="form-control centered"
                                  minlength="5"
                                  aria-describedby="profileSecurityQuestionDescr"
                                  name="securityQuestion"
                                  value={this.state.securityQuestion}
                                  onChange={this.handleChange}
                                  />
                              </label>
                              <div id="profileSecurityQuestionDescr" className="form-text">
                                Your security question must be at least 5 characters and should have a memorable answer. You will be asked
                                this question if you ever need to reset your password.
                              </div>
                            </div>
                            <div className="mb-3">
                              <label for="profileSecurityAnswer" className="form-label">Answer to Security Question:
                                  <input id="profileSecurityAnswer" type="text" className="form-control centered"
                                  minlength="5"
                                  aria-describedby="profileSecurityAnswerDescr"
                                  name="securityAnswer"
                                  value={this.state.securityAnswer}
                                  onChange={this.handleChange}
                                  />
                              </label>
                              <div id="profileSecurityAnswerDescr" className="form-text">
                                Your security answer must be at least 5 characters and should be something you easily associate
                                your security question. You will have to provide this answer if you ever need to reset your password.
                              </div>
                            </div>
                          </div>
                          </div>
                        </form>
                      </div>
                      <div className="accordion-item">
                        <form>
                          <h2 id="profileHeader" className="accordion-header">
                            <button id="profileSettingsBtn" className="accordion-button" type="button"
                              data-bs-toggle="collapse" data-bs-target="#profileSettingsPanel" 
                              aria-expanded="true" 
                              aria-controls="profileSettingsPanel">
                              <legend>Name & Picture</legend>
                            </button>
                          </h2>
                          <div id="profileSettingsPanel" className="accordion-collapse collapse show"
                            aria-labelledby="profileHeader" data-bs-parent="#profileFormAccordion">
                            <div className="accordion-body">
                            <div className="mb-3">
                              <label for="profileDisplayName" className="form-label">Display Name:<br/>
                                  <input id="profileDisplayName" type="text" className="form-control centered"
                                  minlength="5"
                                  aria-describedby="profileDisplayNameDescr"
                                    name="displayName"
                                    value={this.state.displayName} 
                                    onChange={this.handleChange} 
                                  />
                              </label>
                              <div id="profileDisplayNameDescr" className="form-text">
                                Your display name is your identity within SpeedScore. It must be at least 5 characters.
                              </div>
                            </div>
                            <div className="mb-3">
                              <label for="profilePic" className="form-label">Profile Picture (optional):<br/>
                                <img id="profilePicImage" src={profilePic} 
                                      className="fm-profile-pic" height="46" width="auto"/>
                                  <input id="profilePic" type="file" className="form-control centered"
                                  accept=".png, .gif, .jpg"
                                  aria-describedby="profilePicDescr"
                                  name="profilePic"
                                  value={this.state.profilePic}
                                  onChange={this.handleChange}
                                  />
                              </label>
                              <div id="profilePicDescr" className="form-text">
                                Upload a profile picture as a .png, .gif, or .jpg file. A rectangular head shot works best.
                              </div>
                            </div>
                          </div>
                          </div>
                        </form>
                      </div>
                      <div className="accordion-item">
                        <form>
                          <h2 id="sgHeader" className="accordion-header">
                            <button id="sgSettingsBtn" className="accordion-button" type="button"
                              data-bs-toggle="collapse" data-bs-target="#sgSettingsPanel" 
                              aria-expanded="false" 
                              aria-controls="sgSettingsPanel">
                              <legend>Speedgolf Info</legend>
                            </button>
                          </h2>
                          <div id="sgSettingsPanel" className="accordion-collapse collapse show"
                              aria-labelledby="sgHeader" data-bs-parent="#profileFormAccordion">
                            <div className="accordion-body">
                              <div className="mb-3">
                                <label for="sgBio" className="form-label">Personal Speedgolf Bio (optional):</label>
                                  <textarea id="sgBio" className="form-control"
                                    aria-describedby="sgBioDescr" rows="5" cols="40" maxlength="500"
                                    name="bio"
                                    value={this.state.bio}
                                    onChange={this.handleChange}
                                    >
                                  </textarea>
                                <div id="sgBioDescr" className="form-text">
                                  A short personal bio about your speedgolf journey. Maximum of 500 characters.
                                </div>
                              </div>
                              <div className="mb-3">
                                <label for="sgHomeCourser" className="form-label">Home Course (optional):</label>
                                  <input type="text" id="sgHomeCourse" className="form-control centered"
                                    aria-describedby="sgHomeCourseDescr" 
                                    
                                    name="homeCourse"
                                    value={this.state.homeCourse}
                                    onChange={this.handleChange}
                                    />
                                <div id="sgHomeCourseDescr" className="form-text">
                                  Course where you play most of your speedgolf.
                                </div>
                              </div>
                              <form>
                                <div id="clubsDiv" className="mb-3">

                                  <label for="sgClubComments" className="form-label">Comments on Clubs (optional):</label>
                                  <textarea id="sgClubComments" className="form-control"
                                    aria-describedby="sgClubCommentsDescr"
                                    name="clubComments"
                                    value={this.state.clubComments}
                                    onChange={this.handleChange}
                                    ></textarea>
                                  <div id="sgClubCommentsDescr" className="form-text">
                                    Describe your clubs in greater detail. 
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="mode-page-btn-container">
                      <button type="submit" id="submitUpdateProfileBtn" 
                          className="btn btn-primary dialog-primary-btn" 
                          aria-live="polite" aria-busy="false"
                          >
                        <span id="editProfileBtnIcon" 
                          className="fas fa-user-edit" 
                          aria-hidden="true"></span>
                          &nbsp;Update
                      </button>
                      <button type="button" id="cancelUpdateProfileBtn" 
                          className="btn btn-secondary dialog-cancel-btn"
                          onClick={() => {
                            this.props.toggleModalOpen(); this.props.toggleProfileOpen();}}
                          >
                          <span className="fas fa-window-close" 
                          aria-hidden="true"></span>
                        &nbsp;Cancel
                      </button>
                    </div>
                  </form>
                </div> 
        )
    }
}

export default ProfileDialog;