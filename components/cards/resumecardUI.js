import React from 'react'
import Starrating from '../../comments/starrating'
import Like from '../like'
import "./resume.css"

const ResumeCard = props => {
    return (
        <div className="resumcard text-center ">
            <div className="overflow">
                <img src={props.img} alt="" srcset="" className="card-img-tops" />
            </div>
            <div className="card-body text-dark">
            <div className="like-container">
            <h4 className="card-title">{props.name}</h4>
            <div className="like"><Like/></div>
                
            </div>
               
                <div className="placed"> <p className="card-title">Companies Placed</p>
                <Starrating/>
                <div className="span-container">
                <span className="company">{props.placed}</span>
                <span className="company">First Time Placed in Year 2021</span>
                </div>
                
                </div>
               
                <p className="card-text text-secondary">
                I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects.

Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.

A key strength is communication; building strong relationships with people in order to deliver the best results.

Recently, I completed an Open degree, including Business and Design modules at the Open University and I am now fully employed by Clearly Presented as a Digital Media Manager.

                </p>
               <a href={props.link}> <button className="btn btn-outline-success">Inspect</button></a>
            </div>
        </div>


    )
}

export default ResumeCard