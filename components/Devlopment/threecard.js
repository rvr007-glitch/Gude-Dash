import React, { Component, createContext } from "react"
import Card from "./threecardUI"
import "./threecard.css"


class ThreeCards extends Component {

    render() {
        return (
            <div className="containerproj">
                <div className="rowproj">
                    <div className="pojrow  web">
                        <Card imgsrc={"https://i.ibb.co/h8ynJBH/webprj.png"
                        } title="Web Devlopment Begginer Friendly Project To Advance" />
                    </div>
                    <div className="pojrow android">
                        <Card imgsrc={"https://i.ibb.co/ZGKgTp4/androidprj.jpg"}
                            title="App Devlopment Begginer Friendly Project To Advance" />
                    </div>
                    <div className="pojrow ml">
                        <Card imgsrc={"https://i.ibb.co/rt0rRfy/AIprj.jpg"}
                            title="ML Devlopment Begginer Friendly Project To Advance" />
                    </div>

                </div>


            </div>

        );
    }
}
export default ThreeCards;