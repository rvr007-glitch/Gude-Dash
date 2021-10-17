import React from 'react'
import "./CodingCardUI.css"

const CodingCardUI = props => {
    return (
        <div className="cards text-center ">
            <div className="overflow">
                <img src={props.imgsrc} alt="" srcset="" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.para}
                </p>
                <a className="b" href={props.explore}> <button className="btn btn-outline-success">Explore !!!</button></a>
            </div>
        </div>


    )
}

export default CodingCardUI