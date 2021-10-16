import React from 'react'
import "./text.css"

const Text = props => {
    return (
        <div className="card text-center ">

            <div className="card-body text-dark" style={props.width}>
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.para}
                </p>

            </div>
        </div>


    )
}

export default Text