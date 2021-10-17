import React, { Component, createContext } from "react"
import Card from "../../cards/text-cards"

import "../lang/c.css"
import Bar from "../../../components/javachart"
import Foot from "../FooterBtn"
class Javalang extends Component {

    render() {
        return (
            <div className="c-container">
                <div className="heading">
                    <h1 className="ctittle">Java</h1>
                </div>
                <div className="langtittle">
                    <h1>Why Java?</h1>
                </div>
                <div className="desccard"><Card para={`Java is a simple language: Java is easy to learn and its syntax is clear and concise. It is based on C++ (so it is easier for programmers who know C++). Java has removed many confusing and rarely-used features 
                e.g. explicit pointers, operator overloading,Java also takes care of memory management and it also provides an automatic garbage collector. This collects the unused objects automatically.
Java is a platform-independent language: The programs written in Java language, after compilation, are converted into an intermediate level language called the bytecode which is a part of the Java platform irrespective of the machine on which the programs run. This makes java highly portable as its bytecodes can be run on any machine by an interpreter called the Java Virtual Machine(JVM) and thus java provides ‘reusability of code’.
Java is an object-oriented programming language: OOP makes the complete program simpler by dividing it into a number of objects. The objects can be used as a bridge to have data flow from one function to another. We can easily modify data and function’s as per the requirements of the program.  `} /></div>

                <div className="secondary">
                    <div className="btns software"> <a className="a" href="/cpsoftware">Softwares</a></div>
                    <div className="practice">
                        <h3>Practice Here</h3>
                        <div className="logo-container">

                            <a className="hrank" href="https://www.hackerrank.com/domains/java"><img className="hrlogo" src="https://i.ibb.co/6bQjGLd/clang.png" alt="" srcset="" /></a>
                            <a href="https://www.codechef.com/problems/easy"> <img className="codcheflogo" src="https://i.ibb.co/djBQ1Hf/codechef.png" alt="" srcset="" /></a>
                        </div>
                    </div>

                </div>
                <div className="gotStuck">
                    <h1 className="stuck">Got Stuck!!!</h1>
                    <div className="supportcontainer">
                        <a href="https://www.youtube.com/watch?v=3vbizK6KzaU&list=PLUDwpEzHYYLtgkXK6YaZ4I2XcsjMqIaEa"><img className="support yt" src="https://i.ibb.co/5YYcN6R/yt-logo.jpg" alt="" srcset="" /></a>
                        <a href="https://stackoverflow.com/questions/tagged/java"><img className="support stack" src="https://i.ibb.co/s2vj3v5/Stack-Overflow-logo.png" alt="" srcset="" /></a>
                        <a href="https://www.geeksforgeeks.org/java/"> <img className="support gfg" src="https://i.ibb.co/bs1CH6G/gfg.jpg" alt="" srcset="" /></a>

                     <a href="./resources">  <img className="support docs" src="https://i.ibb.co/f28c9R6/Google-Docs-logo-2014-2020-svg.png" alt="" srcset="" /></a> 
                    </div>
                </div>
                <div className="moderate">
                    <h1 className="med">Not A beginner!!</h1>
                    <div className="btns medioker"> <a className="a" href="./resources">Click Here!!!</a></div>
                </div>
                <div className="barclass">
                    <h1 className="bar-header">Role Java in diffrent Fields </h1>
                    <Bar />

                </div>
                <div className="footer">
                    <Foot op={"https://www.youtube.com/watch?v=EttNcy2Xp3k"} />

                </div>
            </div>







        );

    }
}

export default Javalang;