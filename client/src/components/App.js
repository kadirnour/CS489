import React, {useContext,useState, useEffect} from 'react';
import { library } from "@fortawesome/fontawesome-svg-core"; 
import { faWindowClose, faEdit, faCalendar, faClock, faClipboardCheck,
        faSpinner, faSignInAlt, faBars, faTimes, faSearch,
        faSort, faTrash, faEye, faUserPlus, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogle} from '@fortawesome/free-brands-svg-icons';
import NavBar from './NavBar.js';
import ModeTabs from './ModeTabs.js';
import LoginPage from './LoginPage.js';
import FeedPage from './FeedPage.js';
import RoundsPage from './RoundsPage.js';
import CoursesPage from './CoursesPage.js';
import BuddiesPage from './BuddiesPage.js';
import SideMenu from './SideMenu.js';
import AppMode from './AppMode.js';
import ProfileDialog from './ProfileDialog.js';

library.add(faWindowClose,faEdit, faCalendar, faClock, faClipboardCheck,
            faSpinner, faSignInAlt, faBars, faTimes, faSearch, faAngleRight,
            faSort, faTrash, faEye, faUserPlus, faGithub, faGoogle);

function App() {

  const [mode, setMode] = useState(AppMode.Login);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [userData, setUserData] = useState(
    {
      accountData: {},
      identityData: {},
      speedgolfData: {},
      rounds: [],
      roundCount: 0
    });
  const [authenticated, setAuthenticated] = useState(false);
  const [show, setShow] = useState(false);


  useEffect(() => {
    logOut();
    document.addEventListener("click",handleClick, true);
    if (!authenticated) { 
      //Use /auth/test route to (re)-test authentication and obtain user data
      fetch("/auth/test")
        .then((response) => response.json())
        .then((obj) => {
          if (obj.isAuthenticated) {
            logInUser(obj.user);
          }
        })
    } 
  },[])
  

  /*
   handleClick -- document-level click handler assigned in componentDidMount()
   using 'true' as third param to addEventListener(). This means that the event
   handler fires in the _capturing_ phase, not the default _bubbling_ phase.
   Thus, the event handler is fired _before_ any events reach their lowest-level
   target. If the menu is open, we want to close
   it if the user clicks anywhere _except_ on a menu item, in which case we
   want the menu item event handler to get the event (through _bubbling_).
   We identify this border case by comparing 
   e.target.getAttribute("role") to "menuitem". If that's NOT true, then
   we close the menu and stop propagation so event does not reach anyone
   else. However, if the target is a menu item, then we do not execute 
   the if body and the event bubbles to the target. 
  */
  
  const handleClick = (e) => {
    if (menuOpen && e.target.getAttribute("role") !== "menuitem") {
      toggleMenuOpen();
      e.stopPropagation();
    }
  }

  /*
   * Menu item functionality 
   */
  const logOut = () => {
    // this.setState({mode:AppMode.LOGIN,
    //                userData: {
    //                 accountData: {},
    //                 identityData: {},
    //                 speedgolfData: {},
    //                 rounds: [],
    //                 },
    //                authenticated: false,
    //                menuOpen: false});
    setMode(AppMode.LOGIN);
    setUserData(
      {
        accountData: {},
        identityData: {},
        speedgolfData: {},
        rounds: [],
        }
      );
    setAuthenticated(false);
    setMenuOpen(false);
  }
  
   //User interface state management methods
   
  // setMode = (newMode) => {
  //   this.setState({mode: newMode});
  // }

  const toggleMenuOpen = () => {
    //this.setState(prevState => ({menuOpen: !prevState.menuOpen}));
    setMenuOpen(!menuOpen);
  }

  const toggleModalOpen = () => {
    //this.setState(prevState => ({dialogOpen: !prevState.dialogOpen}));
    setModalOpen(!modalOpen);
  }

  const toggleProfileOpen = () => {
    setProfileOpen(!profileOpen);
  }

  //Account Management methods
   
  const accountExists = async(email) => {
    const res = await fetch("/user/" + email);
    return (res.status === 200);
  }

  const getAccountData = (email) => {
    return JSON.parse(localStorage.getItem(email));
  }

  const authenticateUser = async(id, pw) => {
    const url = "/auth/login?username=" + id + 
      "&password=" + pw;
    const res = await fetch(url,{method: 'POST'});
    if (res.status == 200) { //successful login!
      return true;
    } else { //Unsuccessful login
      return false;
    } 
  }

  const logInUser = (userObj) => {
      // this.setState({userData: userObj,
      //                mode: AppMode.FEED,
      //                authenticated: true});
      setUserData(userObj);
      setMode(AppMode.FEED);
      setAuthenticated(true);
  }

  const createAccount = async(data) => {
    const url = '/users/' + data.accountData.id;
    const res = await fetch(url, {
      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        method: 'POST',
        body: JSON.stringify(data)}); 
    if (res.status == 201) { 
        return("New account created with email " + data.accountData.id);
    } else { 
        const resText = await res.text();
        return("New account was not created. " + resText);
    }
  }

  const updateAccount = async(data) => {
    const url = '/users/' + data.accountData.id;
    const res = await fetch(url, {
      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        method: 'PUT',
        body: JSON.stringify(data)}); 
    if (res.status == 201 || res.status == 200) { 
        //this.setState({userData: data});
        return("Account updated with email " + data.accountData.id);
    } else { 
        const resText = await res.text();
        return("Account was not updated. " + resText);
    }
  }

  const updateUserData = (data) => {
   localStorage.setItem(data.accountData.email,JSON.stringify(data));
   //this.setState({userData: data});
   setUserData(data);
  }

  //Round Management methods

  const addRound = async(newRoundData) => {
    //const url = "/rounds/" + this.state.userData.accountData.id;
    const url = "/rounds/" + userData.accountData.id;
    let res = await fetch(url, {
                  method: 'POST',
                  headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                                },
                          method: 'POST',
                          body: JSON.stringify(newRoundData)
                }); 
    if (res.status == 201) { 
      // const newRounds = [...this.state.userData.rounds];
      // newRounds.push(newRoundData);
      // const newUserData = {accountData: this.state.userData.accountData,
      //                      identityData: this.state.userData.identityData,
      //                      speedgolfData: this.state.userData.speedgolfData,
      //                      rounds: newRounds};
      // this.setState({userData: newUserData});

      const newRounds = [...userData.rounds];
      newRounds.push(newRoundData);
      const newUserData = {accountData: userData.accountData,
                           identityData: userData.identityData,
                           speedgolfData: userData.speedgolfData,
                           rounds: newRounds};
      setUserData(newUserData);

      return("New round logged.");  
    } else { 
      const resText = await res.text();
      return("New Round could not be logged. " + resText);
    }
  }

  //DONE
  //Modified to update both the local and db
  const updateRound = async (newRoundData) => {
    //const url = "/rounds/" + this.state.userData.accountData.id;
    const url = "/rounds/" + userData.accountData.id;
    let res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRoundData),
    });
    if (res.status === 200) {
      //const newRounds = [...this.state.userData.rounds];
      const newRounds = [...userData.rounds];
      // let r;
      // for (r = 0; r < newRounds.length; ++r) {
      //   if (newRounds[r].roundNum === newRoundData.roundNum) {
      //     break;
      //   }
      // }
      //newRounds[r] = newRoundData;
      const round = newRounds.find((r) => r.id === newRoundData.id);
      const idx = newRounds.indexOf(round);
      newRounds.splice(idx, 1, newRoundData);
      // const newUserData = {
      //   accountData: this.state.userData.accountData,
      //   identityData: this.state.userData.identityData,
      //   speedgolfProfileData: this.state.userData.speedgolfProfileData,
      //   rounds: newRounds,
      //   roundCount: this.state.userData.roundCount
      //   // ...this.state.userData,
      //   // rounds: newRounds,
      // }
      const newUserData = {
        accountData: userData.accountData,
        identityData: userData.identityData,
        speedgolfProfileData: userData.speedgolfProfileData,
        rounds: newRounds,
        roundCount: userData.roundCount
        // ...this.state.userData,
        // rounds: newRounds,
      }
      localStorage.setItem(newUserData.accountData.email, JSON.stringify(newUserData));
      //this.setState({ userData: newUserData });
      setUserData(newUserData);
    }
  };

  const deleteRound = (id) => {
    var mongoose_delete = require('mongoose-delete');
    //const newRounds = [...this.state.userData.rounds];
    const newRounds = [...userData.rounds];
    let r;
    alert("goal id: "+id);
    for (r = 0; r < newRounds.length; ++r) {
        let myId = newRounds[r]._id;
        if (r === id) {
            alert('deleteround');
            //this.state.userData.deleteOne('_id', myId);
            userData.deleteOne('_id', myId);
            break;
        }
    }
    delete newRounds[r];    
  }

  const handleClose= () =>
  {
    //this.setState({show: false})
    setShow(false);
  }
  
  const showModal= () =>
  {
    //this.setState({show: true})
    setShow(true);
  }

  //render() {
    return (
      <>
        <NavBar mode={mode}
                menuOpen={menuOpen}
                toggleMenuOpen={toggleMenuOpen}
                modalOpen={modalOpen}
                toggleModalOpen={toggleModalOpen}
                userData={userData}
                updateUserData={updateUserData}
                profileOpen={profileOpen}
                toggleProfileOpen={toggleProfileOpen}/> 
        <ModeTabs mode={mode}
                setMode={setMode} 
                menuOpen={menuOpen}
                modalOpen={modalOpen}/>
        <ProfileDialog mode={mode}
                userData={userData}
                menuOpen={menuOpen}
                toggleMenuOpen={toggleMenuOpen}
                modalOpen={modalOpen}
                toggleModalOpen={toggleModalOpen}
                profileOpen={profileOpen}
                toggleProfileOpen={toggleProfileOpen}
                updateAccount={updateAccount}
                />
        {menuOpen  ? <SideMenu logOut={logOut}/> : null}
        {!profileOpen ?
          {LoginMode:
            <LoginPage modalOpen={modalOpen}
                       toggleModalOpen={toggleModalOpen} 
                       logInUser={logInUser}
                       createAccount={createAccount}
                       accountExists={accountExists}
                       authenticateUser={authenticateUser}/>, 
          FeedMode:
            <FeedPage modalOpen={modalOpen}
                      toggleModalOpen={toggleModalOpen} 
                      menuOpen={menuOpen}
                      userId={1}/>,
          RoundsMode:
            <RoundsPage rounds={userData.rounds}
                        addRound={addRound}
                        updateRound={updateRound}
                        deleteRound={deleteRound}
                        show={show}
                        showModal={showModal}
                        handleClose={handleClose}
                        modalOpen={modalOpen}
                        toggleModalOpen={toggleModalOpen} 
                        menuOpen={menuOpen}
                        userId={1}/>,
          CoursesMode:
            <CoursesPage modalOpen={modalOpen}
                        toggleModalOpen={toggleModalOpen} 
                        menuOpen={menuOpen}
                        userId={1}/>,
          BuddiesMode:
            <BuddiesPage modalOpen={modalOpen}
                        toggleModalOpen={toggleModalOpen} 
                        menuOpen={menuOpen}
                        userId={1}/>
        }[mode]
         : <div></div>}
      </>
    ); 
  }

//}
export default App;