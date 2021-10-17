import React from 'react'
import "./cardp.css"


const Cardp = props => {
    return (
        <div className="Scard">
            <div className="Scardm">
                <div className="Soverflow">
                    <img src={props.imgp} alt="" srcset="" className="Scardimg" />
                </div>
                <div className="Scardb">
                    <h4 className="Scardt">{props.title}</h4>
                    <div className="tagl">{props.tag}</div>
                </div>
            </div>
            <div className="bn">
                <a href="#"><button className="btnp1">Easy</button></a>
                <a href="#"><button className="btnp2">Medium</button></a>
                <a href="#"><button className="btnp3">Hard</button></a>
            </div>
        </div>




    )
}


export default Cardp
