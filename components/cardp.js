import React from 'react'
import "./cardp.css"


const Cardp = props => {
    return (
        <div className="card">
            <div className="cardm">
                <div className="overflow">
                    <img src={props.imgp} alt="" srcset="" className="cardimg" />
                </div>
                <div className="cardb">
                    <h4 className="cardt">{props.title}</h4>
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
