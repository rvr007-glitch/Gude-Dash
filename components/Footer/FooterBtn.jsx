import React from 'react'
import "./Footer.css"


const FooterBtn = props => {
    return (
        <div className="containerBtn">
            <div className="btns"> <a className="a" href={props.op}>Opnions</a></div>
            <div className="btn2">
                <div className="btns1"> <a className="a" href="./resources">Resources</a></div>
                <div className="btns1"> <a className="a" href="./projects">Projects</a></div>
            </div>





        </div>
    )
}

export default FooterBtn
