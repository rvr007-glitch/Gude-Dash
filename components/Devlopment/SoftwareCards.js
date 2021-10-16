import React from 'react'
import Scard from "./threecardUI"
import "./Software.css"

const SoftwareCards = () => {
    return (
       <div className="softcontainer">
       <div className="softwarecards">
       <div className="code"> <Scard imgsrc="https://i.ibb.co/Fsj50ky/plce.png"  title="Coding" link="cpsoftware"/> </div>
          
           <div className="web" ><Scard imgsrc="https://i.ibb.co/tZSmxL1/Website-development-banner-computer-technology-monitor-with-open-browser-page-and-woman-profile-on-s.jpg" title="Web" link="/websoftware"/></div> 
          <div className="app"><Scard imgsrc="https://i.ibb.co/nPjWr9B/android.jpg" title="App"/></div> 
          </div> 
           </div>
    )
}

export default SoftwareCards
