import React from 'react';
import logo from '../images/sslogo2.png'

function CoursesPage(props){

        return (
            <div id="coursesModeTab" className="mode-page" role="tabpanel"
                 aria-label="Courses Tab" tabIndex="0">
                <h1 className="mode-page-header">Courses</h1>
                <p className="mode-page-content">This page is under construction.</p>
                <img className="mode-page-icon" 
                     src={logo} alt="SpeedScore logo"></img>
            </div>
        );
    }   


export default CoursesPage;