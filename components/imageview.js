import React from 'react'
import Imgres from "../images/resumepic1.jpg"
import "./imageview.css"

const Imageview = () => {
    return (
        <div className="imgrescontainer">
           <img className="r" src={Imgres} alt="" srcset="" />
        </div>
    )
}

export default Imageview
