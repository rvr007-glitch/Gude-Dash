import React from 'react'
import "./devcard.css"

const Card = props => {
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
              <a href={props.link}>  <button className="btn btn-outline-success">Explore !!!</button></a>
            </div>
        </div>


    )
}

export default Card
