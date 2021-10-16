import { useState } from "react";
import "./Tabs.css";
import SCard from "../components/ScardsUI";


function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="containertab">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Documentation
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Videos
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Practice Set/Projects
                </button>
            </div>

            <div className="Scontent-tabs">
                <div
                    className={toggleState === 1 ? "Scontent  active-Scontent" : "Scontent"}
                >
                    <div>
                        <h2>SContent 1</h2>
                        <hr />
                        <SCard imgsrc={"sample.jpg"} title="Cloud Computing" para="Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. " />
                    </div>

                    <div>
                        <h2>SContent 2</h2>
                        <hr />
                        <SCard imgsrc={"https://i.ibb.co/Kz79Cg7/Cloud-services-isometric-composition-with-big-icons-of-cloud-computing-infrastructure-elements-conne.jpg"
                        } title="Cloud Computing" para="Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. " />

                    </div>

                    <div>
                        <h2>SContent 3</h2>
                        <hr />
                        <SCard imgsrc={"https://i.ibb.co/Kz79Cg7/Cloud-services-isometric-composition-with-big-icons-of-cloud-computing-infrastructure-elements-conne.jpg"
                        } title="Cloud Computing" para="Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. " />

                    </div>

                </div>

                <div
                    className={toggleState === 2 ? "Scontent  active-Scontent" : "Scontent"}
                >
                    <h2>SContent 2</h2>
                    <hr />
                    <SCard />
                </div>

                <div
                    className={toggleState === 3 ? "Scontent  active-Scontent" : "Scontent"}
                >
                    <h2>SContent 3</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                        recusandae totam quidem repudiandae omnis veritatis nostrum
                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tabs;