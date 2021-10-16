import { Component } from "react"
import "../../dev.css"

import ThreeCards from "./threecard";


class Devlop extends Component {

    render() {
        return (
            <div className="devlopcontainer">
                <div className="heading hproj">
                    <h1 className="ptittle">Projects</h1>
                </div>
                <div className="prcontainer">
                    <ThreeCards />
                </div>
            </div>
        )
    }
}
export default Devlop;