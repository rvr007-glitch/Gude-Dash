import React, { Component, createContext } from "react"
import Card from "./CodingCardUI"
import "./codingcard.css"

class CodingCards extends Component {

    render() {
        return (
            <div className="containercode">
                <div className="rowcode">
                    <div className="col">
                        <Card imgsrc={"https://i.ibb.co/xzg0bqp/c-1.png"}
                            title="C" para="C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.  "
                            explore="/Clang" />
                    </div>
                    <div className="col">
                        <Card imgsrc={"https://i.ibb.co/ykBS4XL/c-logo.jpg"
                        } title="C++" para="C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes " />
                    </div>


                </div>
                <div className="rowcode rowcode2">
                    <div className="col">
                        <Card imgsrc={"https://i.ibb.co/7n3kMGD/javalogo.jpg"} title="Java"
                            para={"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
                            } explore={"/Javalang"} />

                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={"https://i.ibb.co/9cF3mBf/pyt1.png"} title="Python"
                            para={"Python is an interpreted high-level general-purpose programming language. "} />
                    </div>

                </div>

            </div>

        );
    }
}
export default CodingCards;