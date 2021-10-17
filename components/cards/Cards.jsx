import React, { Component, createContext } from "react"
import Card from "./cardsUI"

class Cards extends Component {

    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={"https://i.ibb.co/Kz79Cg7/Cloud-services-isometric-composition-with-big-icons-of-cloud-computing-infrastructure-elements-conne.jpg"
                        } title="Cloud Computing" para="Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. " />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={"https://i.ibb.co/5WX13wv/Artificial-intelligence-robots-and-cyborg-arms-at-hud-neon-glowing-technological-background-with-inf.jpg"} title="Artifical Intelligence"
                            para={"Machine learning is the study of computer algorithms that can improve automatically through experience and by the use of data."} />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc="https://i.ibb.co/nPjWr9B/android.jpg" title="App Devlopment"
                            para="Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. " />
                    </div>
                </div>
                <div className="row row2">
                    <div className="col-md-4">
                        <Card imgsrc={"https://i.ibb.co/BKJdKrG/mlface.png"
                        } title="Machine Learning" para="Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. " />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={"https://i.ibb.co/tZSmxL1/Website-development-banner-computer-technology-monitor-with-open-browser-page-and-woman-profile-on-s.jpg"} title="Web Devlopment"
                            para={"Machine learning is the study of computer algorithms that can improve automatically through experience and by the use of data."} />
                    </div>

                </div>

            </div>

        );
    }
}
export default Cards;