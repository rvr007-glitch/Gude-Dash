import React from 'react'
import "./card.css"

const Card = props => {
    return (
        <div className="card text-center ">
            <div className="overflow">
                <img src={props.imgsrc} alt="" srcset="" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.para}
                </p>
                <button className="btn btn-outline-success">Go Anywhere</button>
            </div>
        </div>


    )
}

export default Card
