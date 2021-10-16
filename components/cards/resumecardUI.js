import React from 'react'
import Starrating from '../../comments/starrating'
import Like from '../like'
import "./resume.css"

const ResumeCard = props => {
    return (
        <div className="resumcard text-center ">
            <div className="overflow">
                <img src="https://i.ibb.co/vmpwzB6/rface.jpg" alt="" srcset="" className="card-img-tops" />
            </div>
            <div className="card-body text-dark">
            <div className="like-container">
            <h4 className="card-title">Mr.Andrews</h4>
            <div className="like"><Like/></div>
                
            </div>
               
                <div className="placed"> <p className="card-title">Companies Placed</p>
                <Starrating/>
                <div className="span-container">
                <span className="company">Amazon,Flipkart,Google</span>
                <span className="company">First Time Placed in Year 2021</span>
                </div>
                
                </div>
               
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, expedita doloremque? Dolor totam dolorem quia ipsam dicta delectus temporibus non nesciunt, saepe voluptatibus possimus in doloremque magni. Sint, corporis ratione.
                    Officia quasi aut quia. Porro ut a iusto quo voluptates maiores ipsa quibusdam quas, rerum pariatur. Libero at nostrum facere vero, nihil debitis autem, iste neque optio quo fuga repellendus?
                   endus odio quas velit exercitationem molestias unde maiores culpa? Laborum voluptatum vel fuga. Modi, saepe accusamus.

                </p>
                <button className="btn btn-outline-success">Inspect</button>
            </div>
        </div>


    )
}

export default ResumeCard