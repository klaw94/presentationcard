import React from "react";
import FB from "../Images/fb-grey.png";
import twitter from "../Images/twitter-grey.png"
import insta from "../Images/insta-grey.png"

export default function Footer(){
    return(
        <div className="footerDiv">
            <a href= "https://m.facebook.com/claudia.saji?_rdr" className="fbA">
                <img src={FB}  className="fbIcon"/>
            </a>
            <a href= "https://twitter.com/"  className="twitterA" >
                <img src={twitter} className="twitterIcon"/>
            </a>
            <a href= "https://www.instagram.com/" className="instaA">
                <img src={insta} className="instaIcon"/>
            </a>
        </div>

    )
}