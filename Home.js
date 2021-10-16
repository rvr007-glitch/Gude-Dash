import React from "react";
import Button from '../components/Button';
import Dev from "../dev";
import './Home.css'

function Home() {
    return (
        <>
            <div className="main">
                <img src="Starter.svg" alt="photo" className="imgs" />
                <div className="text-over">
                    <p>This is a para</p>
                    <div className="Get">Get Started</div>
                </div>

            </div>
            <Dev />
        </>
    );
}

export default Home;