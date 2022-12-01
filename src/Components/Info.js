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
                <button className="buttonEmail" onClick={() => goToPage("mailto:clausaji31@gmail.com")}>
                    <img src={mailLogo} className = "buttonIcon"/> 
                    Email 
                </button>
                <button className="buttonLinkedin" onClick={() => goToPage("https://www.linkedin.com/in/claudia-s%C3%A1nchez-jim%C3%A9nez-b76988143/")}>
                    <img src={linkedinLogo} className = "buttonIcon"/>Linkedin
                </button>
            </div>
        </div>
    )
}

function goToPage(link){
    // window.location.href = "https://www.linkedin.com/"; 
    window.open( link, '_blank').focus(); 
}
