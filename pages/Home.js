import React from "react";
import Devlop from "../components/Devlopment/Devlop";

import CodingCards from "../components/Footer/lang/coding/codingcard";
import Codinglang from "../components/Footer/lang/coding/codinglang";
import codinglang from "../components/Footer/lang/coding/codinglang";
import Dev from "../dev";
import './Home.css'

function Home() {
    return (
        <>
        <div className="mains">
            <img src="Starter.svg" alt="photo" className="img" />
            <div className="text-overs">
                <p className="pragraph">This is a para</p>
                <div className="Get">Get Started</div>
            </div>
        </div>
       <Codinglang/>
       <Dev/>
        </>
    );
}

export default Home;