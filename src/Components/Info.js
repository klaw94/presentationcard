import React from "react";
import linkedinLogo from "../Images/linkedin-button.png"
import mailLogo from "../Images/mail.png"
import myPic from "../Images/portrait.jpg"

export default function Info(){
    return(
        <div>
            <img src = {myPic} className="myPic"/>
            <h1 className="myName">Claudia Saji</h1>
            <p className="myJob">Frontend Developer</p>
            <a href= "https://github.com/klaw94" className="myWeb">
                <p>github.com/klaw94</p>
            </a>
            <div className="buttonsDiv">
                <button className="buttonEmail">
                    <img src={mailLogo} className = "buttonIcon"/> 
                    Email 
                </button>
                <button className="buttonLinkedin">
                    <img src={linkedinLogo} className = "buttonIcon"/>Linkedin
                </button>
            </div>
        </div>
    )
}