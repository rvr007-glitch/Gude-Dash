import { Component } from "react"


import TodoList from "./TodoList"
import "./Community.css"



class Community extends Component {


    render() {
        return (
            <div className="devlopcontainer">
                <div className="heading hproj">
                    <h1 className="comtittle">Form Your Communtiy </h1>
                </div>
                <div className="comcontainer">
                    <TodoList />
                </div>
            </div>
        )
    }
}
export default Community;