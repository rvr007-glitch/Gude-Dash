import React, { Component, createContext } from "react"
import Card from "../Devlopment/threecardUI"
import "./resourcecard.css"


class ResourceCard extends Component {

    render() {
        return (
            <div className="containerproj">
                <div className="rowproj">
                    <div className="pojrow  web">
                        <Card imgsrc={"https://i.ibb.co/55Vd6Tb/cp.png"
                        } title="Competative Coding" />
                    </div>
                    <div className="pojrow android">
                        <Card imgsrc={"https://i.ibb.co/d0FSVfz/plc.png"}
                            title="Devlopment" />
                    </div>
                    <div className="pojrow ml">
                        <Card imgsrc={"https://i.ibb.co/Fsj50ky/plce.png"}
                            title="Placement" />
                    </div>

                </div>


            </div>

        );
    }
}
export default ResourceCard;